import Vue from 'vue';
import Vuex from 'vuex';
import jwt_decode from 'jwt-decode';
import router from '../Router/router';
import _ from 'underscore';


Vue.use(Vuex);


export const store = new Vuex.Store({
    strict: true,
    state: {
        username: localStorage.getItem('username'),
        token: localStorage.getItem('token'),
        endPoints:{
            root: 'http://localhost:8003/api/v1/',
            auth: 'auth/token/',
            refresh: 'refresh/token/',
        },
        accounts: []
    },
    getters:{
        getStaff: state => {
            if(state.accounts)
                return _.filter(state.accounts, account => account.role != "doctor");
            return null;
        },
        getDoctors: state => {
            if(state.accounts)
                return _.filter(state.accounts, account => account.role == "doctor");
            return null;
        },
        getAccount: state => id => {
            console.log("inside get account getter");
            console.log(id);
            console.log(state.accounts);

            if(state.accounts)
                return _.find(state.accounts, account => account.id == id);
            return null;
        }
    },
    mutations:{
       updateUsername: (state, payload) => {
           localStorage.setItem('username', payload);
           state.username = payload;
       },
       removeUsername: state => {
           localStorage.removeItem('username');
           state.username = null;
       },
       updateToken: (state, payload) => {
           localStorage.setItem('token', payload);
           state.token = payload;
       },
       removeToken: state => {
           localStorage.removeItem('token');
           state.token = null;
       },
       updateAccounts: (state, payload) => {
           state.accounts = payload;
       },
       updateAccount: (state, payload) => {
           let acc = store.getters.getAccount(payload.id);
           acc && _.extend(acc, payload);
       },
       createAccount: (state, payload) => {
           state.accounts.push(payload);
       }
    },
    actions:{
        obtainToken: (context, payload) =>{
            return new Promise((resolve, reject) => {
                Vue.http.post(context.state.endPoints.auth, {
                    "email": payload.email,
                    "password": payload.password
                })
                .then(response => {
                    context.commit('updateToken', response.body.token);
                    context.commit('updateUsername', payload.email);
                    resolve(response);
                },
                error => {
                    reject(error);
                });
            });
        },
        refreshToken: context => {
            Vue.http.post(context.state.endPoints.refresh, {
                "token": context.state.token
            })
            .then(resp => {
                console.log("New Token: " + resp.body.token);
                context.commit('updateToken', resp.body.token);
            },
            error => {
                console.log(error);
                context.dispatch('logoutUser');
                router.push('/login');
            });
        },
        verifyToken: context => {
            const token = context.state.token;
            if(token){
                const decoded = jwt_decode(token);
                const orig_iat = decoded.orig_iat;
                const exp = decoded.exp;
                console.log("The Times ");
                console.log(orig_iat);
                console.log(exp);
                if(exp - (Date.now()/1000) <= 1800 && (Date.now()/1000) - orig_iat < 628200){
                    console.log("*************refreshing");
                    context.dispatch('refreshToken');
                }else if(exp - (Date.now()/1000) <= 1800 || exp - (Date.now()/1000) > 1800){
                    console.log("***********DO NOTHING");
                    // OR VERIFY THE TOKEN HERE
                }else{
                    console.log("***********logging out");
                    context.dispatch('logoutUser');
                    router.push('/login');
                }
            }
        },
        logoutUser: context => {
            context.commit('removeUsername');
            context.commit('removeToken');
        },
        getAccounts: context =>{
            return new Promise((resolve, reject) => {
                Vue.http.get('accounts')
                .then(
                    resp => {
                        console.log(resp);
                        context.commit('updateAccounts', resp.body);
                        resolve(resp);
                    }, 
                    error => {
                        reject(error);
                });
            });
        },
        updateAccount: (context, payload) =>{
            return new Promise((resolve, reject) => {
                Vue.http.put('accounts/' + payload.id + '/', payload)
                .then(
                    resp => {
                        //update accounts store
                        context.commit('updateAccount', payload); 
                        console.log(resp);
                        resolve(resp);
                    }, 
                    error => {
                        reject(error);
                });
            });
        },
        resetPassword: (context, payload) => {
            return new Promise((resolve, reject) => {
                Vue.http.put('accounts/' + payload.id + '/reset-password/', payload)
                .then(
                    response => resolve(response),
                    error => reject(error)
                );
            });
        },
        createAccount: (context, payload) => {
            return new Promise((resolve, reject) => {
                Vue.http.post('accounts/', payload)
                .then(
                    resp => {
                        //add account to accounts array
                        context.commit('createAccount', resp.body);
                        resolve(resp);
                    },
                    error => { reject(error);}
                );
            });
        }

    }
});
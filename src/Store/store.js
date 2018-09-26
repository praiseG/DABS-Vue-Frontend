import Vue from 'vue';
import Vuex from 'vuex';


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
            Vue.http.post(state.endPoints.refresh, {
                "token": context.state.token
            })
            .then(resp => {
                console.log(resp);
                context.commit('updateToken', resp.body.token);
            },
            error => {
                console.log(error);
            });
        },
        verifyToken: context => {
            const token = context.state.token;
            if(token){
                const decoded = jwt_decode(token);
                const orig_iat = decoded.orig_iat;
                const exp = decoded.exp;
                
                if(exp - (Date.now()/1000) < 1800 && (Date.now()/1000) - orig_iat < 628200){
                    context.dispatch('refreshToken');
                }else if(exp - (Date.now()/1000) < 1800){
                    //DO NOTHING
                }else{
                    context.commit('removeToken');
                    context.commit('removeUsername');
                    Vue.router.push('/login');
                }
            }
        },
        logoutUser: context => {
            context.commit('removeUsername');
            context.commit('removeToken');
        }

    }
});
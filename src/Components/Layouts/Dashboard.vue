<template>
    <div class="row">
        <div class="col-md-4">
            <navigation />
        </div>
        <div class="col-md-8">
            <p>{{content}}</p>
            <Accounts />
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation';
import Accounts from '../Accounts/Accounts';

export default {
    components: {
        'Navigation': Navigation,
        'Accounts': Accounts,
    },
    data(){
        return{
            'content': 'This is the body'
        }
    }

}
</script>

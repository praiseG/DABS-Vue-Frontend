<template>
    <b-container>
        <b-card>
            <b-card-body class="text-center">
                <h1 class="text-danger display-2">403</h1>
                <span class="h1 text-dark">{{"Forbidden" | toUpperCase }}</span>
                <p><small class="text-dabs font-weight-bold">You do not have permissions to access this resource.</small></p>
                <b-link class="btn btn-dabs" to="/">Back Home</b-link>
            </b-card-body>
        </b-card>
    </b-container>
</template>

<script>
import {  toUpperCase } from '../../Filters';
export default {
    filters:{
        toUpperCase
    }
}
</script>

<style>

</style>

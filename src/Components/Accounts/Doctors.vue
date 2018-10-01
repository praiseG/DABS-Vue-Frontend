<template>
    <div>
        <b-card class="mt-3" header="Doctors">
            <div class="table-responsive">
                <table id="accounts-tbl" aria-busy="false" class="table b-table table-striped table-hover table-bordered table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Created At</th>
                            <td>Active</td>
                            <th colspan="3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="doctors" v-for="(doc, index) in doctors" :key="index">
                            <td>{{index + 1}}</td>
                            <td>{{doc.name}}</td>
                            <td>{{doc.email}}</td>
                            <td>{{doc.designation}}</td>
                            <td>{{doc.created_at | formatDate}}</td>
                            <td>
                                <b-badge variant="success" v-if="doc.is_active">Yes</b-badge>
                                <b-badge variant="danger" v-if="!doc.is_active">No</b-badge>
                            </td>
                            <td><i class="fas fa-clipboard-list text-info"></i></td>
                            <td><router-link :to="'doctors/' + doc.id + ''"><i class="fas fa-info text-info"></i></router-link></td>
                            <td><router-link :to="'doctors/' + doc.id + '/edit'"><i class="fas fa-user-edit text-info"></i></router-link></td>
                        </tr>
                        <tr v-else><td colspan="4">No Data in Table</td></tr>
                    </tbody>
                </table>
            </div>
        </b-card>
    </div>
</template>

<script>
import { formatDate } from '../../Filters/filters';
import { mapGetters } from 'vuex';
    export default {
        computed:{
            ...mapGetters({
                doctors: 'getDoctors'
            })
        },
        filters: {
            formatDate,
        }
    }
</script>

<style scoped>
li{
    color: red,
}
</style>
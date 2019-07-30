<template>
    <div class="page_body">
        <navbar />
        <p style="margin-top: 30vh;font-size: 30px; font-weight: 900; color: #757575;">This page will be added soon</p>
    </div>
</template>

<style scoped> 

</style>

<script>

import navbar from '../components/navbar.vue'
import { EventBus } from '../../../../../../sip-bphc/hash/frontend/hash/src/eventbus';


export default {
    name: 'bucket',
    data () {
        return {

        }
    },
    mounted: function () {
        this.listenToEventBus()
    },
    components: {
        navbar
    },
    methods: {
        listenToEventBus () {
            var vm = this
            EventBus.$on("comment", commentData => {
                alert('yo')
            });
        },
    },

}
</script>

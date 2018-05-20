<template>
    <div id="app">
        <logging/>
        <hello_world/>
        <p> Now my money is {{ $store.state.money }} </p>
        <login/>
        <alert/>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import vuex from './vuex_store'

import login from './components/login'
import alert from './components/alert'
import hello_world from './components/HelloWorld'
import logging from './components/logging'


export default {
    name: 'App',
    components:{
        login:login,
        alert:alert,
        hello_world:hello_world,
        logging:logging
    },
    data(){ return {
        sss: "./assets/logo.png",
    }},
    computed: {
        nbackground () {
            /*
            https://github.com/vuejs/Discussion/issues/202
            http://vuejs-templates.github.io/webpack/static.html
            https://github.com/vuejs-templates/webpack/issues/267
            https://forum.vuejs.org/t/v-binding-an-image-from-an-object-to-an-img-src-not-working-in-vue-pwa-template/12754/3
            
            let bak1 = this.sss;
            let bak2 = "./assets/logo.png";
            let bak3 = require( "./assets/logo.png" );
            //let require_string = eval(`require( ${ bak2 } )`);
            // console.log( smg );
            */
            return require( "./assets/logo.png" ); // $store.state.img_src
        }
    }
}
</script>

<style>
#app {
    max-width: 960px;
    margin: 0 auto;
}
</style>

import Vue from 'vue'
import Vuex from 'vuex'
import ajax from 'axios'

Vue.use(Vuex)

const state = {
    money: 0,
    history: [],
    is_login:false,
    logging:false,
    member:""
}

const getters = {
    evenOrOdd: ( state ) => state.money % 2 === 0 ? 'even' : 'odd',
    new_count: ( store ) => state.money * 0.2,
    the_count: ( store ) => state.money
}

const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    ajax_login: ({ commit },login_info) =>
    {
        commit("switch_logging");
        ajax.get("https://yesno.wtf/api").then((res)=>
        {   // https://yesno.wtf
            commit("switch_logging");
            switch( res.data.answer )
            {
                case( "yes" ) : commit("login",login_info.account);break;
                case( "no" ) : alert("Login incorrect!");break;
                case( "maybe" ) : alert("Server error!");
                default: break;
            }
        })
        .catch( (err) =>
        {
            console.error(err);
            alert("Server error!");
            commit("switch_logging");
        });
    },
}

const mutations = {
    increment: ( state ) => state.money++,
    decrement: ( state ) => state.money--,
    switch_logging: ( state ) => state.logging = !state.logging,
    login: ( state , account ) =>
    {
        state.is_login = true;
        state.member = account;
    },
    logout: ( state ) =>
    {
        state.is_login = false;
        state.member = "";
    },
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

/*
if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}
*/

export default store
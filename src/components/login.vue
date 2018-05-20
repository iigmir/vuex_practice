<template>
  <div>
    <div v-if="$store.state.is_login">
      Hi {{ $store.state.member }}
      <button v-on:click="letslogout"> Logout </button>
    </div>
    <form action="#" v-on:submit.prevent="letslogin" v-else>
      <fieldset>
        <legend>Login</legend>
        <div class="flexform">
          <input placeholder="account" type="text" name="account" v-model="account">
          <input placeholder="password" type="password" name="password" v-model="password">
          <input value="Submit" type="submit" >
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vuex from '../vuex_store'

export default {
  name: 'login',
  data () {
    return {
      msg: "Welcome to Vuex App",
      account:"",
      password:""
    }
  },
  methods: {
    letslogin()
    {
      let login_data =
      {
        account: this.account.trim() ,
        password: this.password.trim()
      };
      if( login_data.account === "" || login_data.password === "" )
      {
        alert("No empty!");
        return false;
      }
      vuex.dispatch('ajax_login',login_data);
    },
    letslogout()
    {
      vuex.commit("logout");
    }
  }
}
</script>

<style scoped>
.flexform
{
  display: flex;
  justify-content: space-between;
}
.flexform > *
{
  margin-right: 1rem;
}
</style>

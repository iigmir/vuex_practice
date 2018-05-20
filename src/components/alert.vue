<template>
    <div class="alert">
        <p v-if="$store.state.is_login">
            Hi {{ $store.state.member }}, <br />
            I have some stories <br />
            To tell you <br />
            Only you <br />
            All <br />
            Around <br />
            You
        </p>
        <p v-else> Hello, my friend. Wanna login? </p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import vuex from "../vuex_store"

export default
{
    methods:
    {
        letslogout:() => vuex.commit('logout')
    }
}
</script>

<style scoped></style>

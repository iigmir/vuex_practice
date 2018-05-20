<template>
    <div id="logging" v-if="$store.state.logging">
        <p> > <span>Waiting for login...</span><span class="ani">_</span> </p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import vuex from "../vuex_store"
export default{}
</script>

<style scoped>
@keyframes cmder
{
    from { opacity: 0; }
    to { opacity: 1; }
}

#logging
{
    position: absolute;
    left: 0;top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
}

#logging p
{
    color: #0E0;
    padding: 40vh 0 0 40vw;
}
#logging p .ani
{
    color: #0E0;
    animation: 0.4s linear 0s infinite alternate cmder;
}
</style>
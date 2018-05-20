<template>
    <div class="hello">
        <div class="intro">
            <img src="../assets/logo.png">
            <h1>{{ msg }}</h1>
        </div>
        <div class="intro">
            <p>My money: {{ $store.state.money }} </p>
            <button v-on:click="increment"> Increase </button>
            <button v-on:click="decrement"> Decrease </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'HelloWorld',
    data () {
        return { msg: "Welcome to Vuex App" }
    },
    computed: mapGetters([
        'new_count',
        'evenOrOdd'
    ]),
    methods: {
        ...mapActions([
        'increment',
        'decrement',
        ]),
        foobar(){ return "fool" }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{ max-width: 90px; }
.intro
{
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1rem;
}
.intro > * { margin-right: 1rem; }
</style>

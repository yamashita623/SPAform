<template>
    <section>
        <span class="title">{{$store.state.counter}}</span>
        <b-button @click="increment">add</b-button>
        <b-button @click="decrement">sub</b-button>
    </section>
</template>

<script>
export default {
    methods:{
        increment(){
            this.$store.commit("increment");
        },
        decrement(){
            this.$store.commit("decrement");
        }
    }
}
</script>

<style scoped>

</style>
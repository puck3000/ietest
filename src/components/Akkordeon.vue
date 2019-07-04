<template>
    <article>
        <div class="header" v-on:click="toggle">
            <slot name="header">Frage</slot>
        </div>
        <transition name="accordion"
        <div class="body" v-show="show">
            <slot>Antwort</slot>
        </div>
        </transition>
        <hr>
    </article>
</template>

<script>
export default {
    name:"akkordeon",
    data() {
    return {
      show: false
    };
  },
  
  methods: {
    toggle: function() {
      this.show = !this.show;
    },
  }
}
</script>

<style lang="stylus" scoped>

hr
    width: 5rem
    color: white
    border: white 1px solid 
    margin-top: 2rem
    margin-bottom: 2rem


</style>


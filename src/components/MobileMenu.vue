<template>
  <header :class="{ 'is-active': isActive }" class="mobileNav"  data-scroll-header>
    <div class="headStuff">
      <button
        @click="toggleMenu"
        class="hamburger hamburger--slider"
        :class="{ 'is-active': isActive }"
        type="button"
      >
        <h2 v-if="!isActive">Menu</h2>
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <div v-if="isActive" class="nav">
        <slot name="mainnav"></slot>
        <slot name="sitesearch"></slot>
        <slot name="langswitcher"></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "mobilemenu",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleMenu: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="stylus" scoped>

.headStuff {
  background-color: vred
  margin-top: .75rem
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: end;
  align-items: center;
}
h2 {
  display: inline
  margin-bottom: 0
  margin-right: 1rem
}


.hamburger {
  text-align: right;
  margin-right: 1rem;
  display:block
}

.hamburger.is-active:hover, .hamburger:hover 
  opacity: 1

.nav 
  height: calc(100vh - 4rem)
  grid-column-start: span 2;
  text-align: center;
  display: flex
  flex-direction: column
  nav 
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li 
      margin-bottom: 1rem
  a  
    font-size: 1.5rem
  form 
    input 
      height: 3rem
#langSwitcher
  padding-bottom: 4rem
  li 
    display: inline-block
    &:not(:last-child)
      border-right: 2px solid white
      padding: .5rem 1rem
    &:last-child
      padding: .5rem 1rem

form 
  margin-bottom: 2rem


</style>

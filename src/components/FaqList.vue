<template>
  <div>
    <input type="text" v-model="search" :placeholder="suche"  onfocus="this.placeholder = ''">
    
    <akkordeon v-for="faq in filteredList" :key="faq.id">
      <div class="pointer" slot="header"><span v-html="faq.frage"></span></div>
      <span v-html="faq.antwort"></span>
    </akkordeon>
    
    <div v-if="filteredList.length<=0">Keine FAQs gefunden</div>
  </div>
</template>

<script>
export default {
  name: "faqlist",
  props: ["faqs", "suche"],
  data() {
    return {
      search: "",
      show: false
    };
  },
  computed: {
    filteredList() {
      return this.faqs.filter(faq => {
        let frageantwort = faq.frage.toLowerCase().includes(this.search.toLowerCase()) || faq.antwort.toLowerCase().includes(this.search.toLowerCase())
        return frageantwort;
      });
    }
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    }
  }
}
</script>

<style lang="stylus" scoped>

.pointer 
  cursor pointer
div 
  width: 100%
  input 
    height: 3rem
    width: 100%
    padding: 0
    margin-bottom: 2rem


article
  margin-bottom: 1rem
  hr
    width: 5rem
    color: white
    border: white 1px solid 
    margin-top: 2rem
    margin-bottom: 2rem

.frage 
  font-style italic
  font-size: 2rem


</style>

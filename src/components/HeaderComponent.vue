<template>
<div>
  <mq-layout :mq="['mobile', 'tablet', 'laptop']">
  <mobile-menu>
    <template v-slot:mainnav>
      <slot name="mainnav"></slot>
    </template>
    <template v-slot:langswitcher>
      <slot name="langswitcher"></slot>
    </template>
    <template v-slot:sitesearch>
      <slot name="sitesearch"></slot>
    </template>
  </mobile-menu>
  </mq-layout>
    <mq-layout :mq="'desktop+'">
    <desktop-menu>
      <template v-slot:mainnav>
        <slot name="mainnav"></slot>
      </template>
      <template v-slot:langswitcher>
        <slot name="langswitcher"></slot>
      </template>
      <template v-slot:sitesearch>
        <slot name="sitesearch"></slot>
      </template>
    </desktop-menu>
  </mq-layout>
</div>
</template>

<script>
export default {
  name: "header"
};
</script>

<style lang="stylus" >


</style>

<template>
<div class="parallax">
    <div class="parallaxWrapper" v-cloak >
        <img v-if="webpsupport"
            src="/assets/parallaxium/SCHAFE-ZIEGEN_Parallax_C_768.webp"
            sizes="100vw"
            srcset="assets/parallaxium/SCHAFE-ZIEGEN_Parallax_C_1300.webp 1300w,
            assets/parallaxium/SCHAFE-ZIEGEN_Parallax_C_900.webp 900w,
            assets/parallaxium/SCHAFE-ZIEGEN_Parallax_C_768.webp 768w"
            alt="SchafeZiegen Parallax Bild C" 
            class="paral " 
            v-parallax.absY="0.5"
        >
        <img v-else src="/assets/parallaxium/SCHAFE-ZIEGEN_Parallax_C_768.png" 
            alt="SchafeZiegen Parallax Bild C" 
            class="paral " 
            v-parallax.absY="0.5">

        <img v-if="webpsupport"
            src="/assets/parallaxium/SCHAFE-ZIEGEN_Parallax_B_768.webp"
            sizes="100vw"
            srcset="assets/parallaxium/SCHAFE-ZIEGEN_Parallax_B_1300.webp 1300w,
            assets/parallaxium/SCHAFE-ZIEGEN_Parallax_B_900.webp 900w,
            assets/parallaxium/SCHAFE-ZIEGEN_Parallax_B_768.webp 768w"
            alt="SchafeZiegen Parallax Bild B" 
            class="paral " 
            v-parallax.absY="0.25"
        >
        <img v-else src="/assets/parallaxium/SCHAFE-ZIEGEN_Parallax_B_768.png" 
            alt="SchafeZiegen Parallax Bild B" 
            class="paral " 
            v-parallax.absY="0.5">

        <img v-if="webpsupport"
            src="/assets/parallaxium/SCHAFE-ZIEGEN_Parallax_A_768.webp"
            sizes="100vw"
            srcset="assets/parallaxium/SCHAFE-ZIEGEN_Parallax_A_1300.webp 1300w,
            assets/parallaxium/SCHAFE-ZIEGEN_Parallax_A_900.webp 900w,
            assets/parallaxium/SCHAFE-ZIEGEN_Parallax_A_768.webp 768w"
            alt="SchafeZiegen Parallax Bild A" 
            class="paral last" 
            v-parallax.absY="0"
        >
        <img v-else src="/assets/parallaxium/SCHAFE-ZIEGEN_Parallax_A_768.png" 
            alt="SchafeZiegen Parallax Bild A" 
            class="paral " 
            v-parallax.absY="0.5">

        <div class="herotext" v-parallax.absY="1">
            <div v-html="herotext" ></div>
        </div>
        <scroll-indicator></scroll-indicator>
    </div>
</div>
   
   
</template>

<script>
export default {
    name: "heroparallax",
    props: ["herotext", "webpsupport"],
    methods: {
        reload: function() {
            this.$forceUpdate();
        }
    },
    mounted() {
        this.reload;
    }

    

}
</script>

<style lang="stylus" scoped>

[v-cloak] 
  display: none;


.parallaxWrapper 
    display: grid 
    grid-template-columns: 1fr
    .paral
        grid-row-start: 1;
        grid-column-start: 1;
    img 
        min-width: 100%
        &.last
            z-index: 8
       
.herotext 
    position: absolute
    padding: 6rem 2rem
    @media screen and (min-width: 1080px)
        padding: 7rem 4rem
        div 
            width: 85%
            media screen and (min-width: 1600px)
                width: 60%
</style>

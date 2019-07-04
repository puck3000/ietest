<template>
<header :class="$mq" class="desktopNav"  data-scroll-header>
    <div class="headerWrapper" :class="$mq" >
        <div class="navElements" :class="$mq">
            <slot name="mainnav"></slot>
            <slot name="langswitcher"></slot>
            <slot name="sitesearch"></slot>
        </div>
    </div>
</header>
</template>

<script>
export default {
    name: "desktopMenu"

}
</script>

<style lang="stylus" scoped>
header 
    width:100%
.headerWrapper 
    width: 900px
    @media screen and (min-width: 1600px) 
        width: 1300px
    margin: auto
    display flex
    .navElements
        width: 100%
        display: flex
        align-items: center;
        #mainNav 
            flex-grow: 1
            ul 
                padding-left: 1.5rem
                li  
                    display: inline-flex
                    flex-direction: row
                    align-items: center
                    padding: 0 .5rem
                    margin-right 0
                    transition: background-color .3s ease-in-out
                    &.active, &:hover
                        background-color darken(#FC0D1B, 20%)
                    height: 4rem
                    a 
                        padding: 1rem 0
                    
    #langSwitcher
        margin-right: 1.5rem
</style>


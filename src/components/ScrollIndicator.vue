<template>
    <div class="scrollIndicator" :class="$mq">
        <a data-scroll href="#moderhinke">
            <span></span>
            <span></span>
            <span></span>
        </a>
    </div>
</template>

<script>
export default {
    name: "scrollIndicator"

}
</script>

<style lang="stylus" scoped>

a 
    height: 4rem
    width: 2rem
.scrollIndicator
    &.mobile 
        display: none
    z-index: 9
    align-self: center
    justify-self: center
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
    span 
        display: block
        width: 1.5rem
        height: 1.5rem
        border-bottom: 2px solid white
        border-right: 2px solid white
        transform: rotate(45deg)
        animation: animate 2s infinite;
        &:nth-child(2)
            animation-delay: -.2s
            transform: rotate(45deg) translate(-1rem, -1rem)
        &:nth-child(3)
            animation-delay: -.4s

@keyframes animate   
    0%
        opacity: 0
        transform: rotate(45deg) translate(-1rem, -1rem)
    50%
        opacity: 1
    100% 
        opacity: 0
        transform: rotate(45deg) translate(1rem, 1rem)
</style>


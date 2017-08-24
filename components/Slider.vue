<template>
    <div class="slider">
        <img v-for="image in images" :key="image.id" :src="image.src" />
    </div>
</template>

<script>
    import * as $ from 'jquery';
    export default {
        props:['images'],
        mounted(){
            const container = $(this.$el);
            container.find('img:gt(0)').hide();
            setInterval(function(){
                container.find(':first-child').fadeOut(1500)
                    .next('img').fadeIn(1500)
                    .end().appendTo(container);
            },2000);
        }
    }
</script>
<style lang="scss" scoped>
    .slider{
        height: 70%;
        display: inline-block;
        position: relative;
        left: 24%;
        top: 50%;
        transform: translate(0, -50%);
        img{
            position: absolute;
            height: 100%;
        }
    }
</style>


<template>
    <div class="product">
        <router-link :to="'/products/'+id">
            <img :src="image" />
        </router-link>
    </div>
</template>

<script>
    export default {
        props:['image','id']  
    }
</script>

<style lang="scss" scoped>
    .product{
        display: inline-block;
    }
</style>

<template>
    <div class="side-menu">
        <ul>
            <li v-for="item in listItems" :key="item.id">
                <router-link :to="'/categories/'+item.id" >{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['list-items']
    }
</script>

<style lang="scss" scoped>
    .side-menu{
        height: 100vh;
        width: 15vw;
        background-color: grey;
        float: left;
        ul{
            position: relative;
            top: 50%;
            transform: translate(0,-50%);
            li{
                a{
                    display: inline-block;
                    position: relative;
                    left: 50%;
                    transform: translate(-50%,0);
                    margin-bottom: 10px;
                    font-size: 20px;
                    color: pink;
                    text-decoration: none;
                }
                .nuxt-link-active{
                    color: black;
                }
            }
        }
    }
</style>

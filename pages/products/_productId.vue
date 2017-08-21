<template>
    <div class="product-info">
		<SideMenu :list-items="categories"></SideMenu>
		<div class="content-container">
            <h2>{{product.productName}}</h2>
            <div class="product">
                <ProductItem :id="product.productId"
                    :image="product.productImage"
                ></ProductItem>
            </div>
            <router-link class="home-link" :to="'/'">Home</router-link>
		</div>
    </div>
</template>

<script>
    import SideMenu from '~/components/SideMenu.vue';
    import ProductItem from '~/components/ProductItem.vue';
    import { getProductInfo } from '~/mockApis';
    export default {
        components:{SideMenu,ProductItem},
        asyncData({ params,error }){
            return getProductInfo(params.productId).then(
                productInfo => productInfo,
                _error => {
                    if(_error == 'not-found'){
                        error({
                            statusCode:404,
                            message:'This page could not be found.'
                        });
                    }else{
                        error({
                            statusCode:500,
                            message:'Something went wrong. Entho kozhappam patti.'
                        })
                    }
                }
            );
        }
    }
</script>

<style lang="scss" scoped>
    .product-info{
        .content-container{
            h2{
                font-weight: bold;
                font-size: 40px;
                margin-top: 20px;
                margin-left: 20px;
            }
            .product{
                display: flex;
                justify-content: space-around;
                margin-top: 70px;
            }
            .home-link{
                margin-top: 60px;
                display: inline-block;
                position: relative;
                left: 50%;
                transform: translate(-50%);
            }
        }
    }
</style>

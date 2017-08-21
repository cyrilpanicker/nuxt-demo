<template>
    <div class="category-info">
		<SideMenu :list-items="categories"></SideMenu>
		<div class="content-container">
            <h2>{{selectedCategory.categoryName}}</h2>
            <div class="product-list">
                <ProductItem v-for="product in selectedCategory.products"
                    :key="product.productId"
                    :id="product.productId"
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
    import { getCategoryInfo } from '~/mockApis';
    export default {
        components:{SideMenu,ProductItem},
        asyncData({ params,error }){
            return getCategoryInfo(params.categoryId).then(
                categoryInfo => categoryInfo,
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
    .category-info{
        .content-container{
            h2{
                font-weight: bold;
                font-size: 40px;
                margin-top: 20px;
                margin-left: 20px;
            }
            .product-list{
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

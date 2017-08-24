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
    import axios from 'axios';
    import SideMenu from '~/components/SideMenu.vue';
    import ProductItem from '~/components/ProductItem.vue';
    export default {
        components:{SideMenu,ProductItem},
        asyncData({ params,error,env }){
			return axios.get(env.proxyApiBasePath + env.proxyApiUrls['categories'] + params.categoryId).then(
				response => response.data,
				_error => {
                    if(_error && _error.response && _error.response.status == 404){
                        error({
                            statusCode:404,
                            message:env.pageNotFoundErrorMessage
                        });
                    }else{
                        console.log(_error);
                        error({
                            statusCode:500,
                            message:env.serverErrorMessage
                        });
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

<template>
	<div class="home">
		<SideMenu :list-items="categories"></SideMenu>
		<div class="content-container">
			<Slider :images="images"></Slider>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import SideMenu from '~/components/SideMenu.vue';
	import Slider from '~/components/Slider.vue';

	export default {
		components: {
			SideMenu:SideMenu,
			Slider:Slider
		},
		asyncData({ env,error }){
			return axios.get(env.proxyApiBasePath + env.proxyApiUrls['home']).then(
				response => response.data,
				_error => {
					console.log(_error);
					error({
						statusCode:500,
						message:env.serverErrorMessage
					});
				}
			);
		}
	}
</script>

<style lang="scss" scoped>

</style>

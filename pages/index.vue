<template>
	<div class="home">
		<SideMenu :list-items="categories"></SideMenu>
		<div class="content-container">
			<Slider :images="images"></Slider>
		</div>
	</div>
</template>

<script>
	import SideMenu from '~/components/SideMenu.vue';
	import Slider from '~/components/Slider.vue';
	import { getHome } from '~/mockApis';

	export default {
		components: {
			SideMenu:SideMenu,
			Slider:Slider
		},
		asyncData(context){
			return getHome().then(
				home => home,
				error => context.error({statusCode:500,message:'Something went wrong. Entho kozhappam patti.'})
			);
		}
	}
</script>

<style lang="scss" scoped>

</style>

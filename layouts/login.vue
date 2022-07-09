<template>
	<div>
		<section id="preloader">
			<PreloaderPage />
		</section>

		<section>
			<NavBarLogin/>
		</section>

		<section>
			<PageNameH1 page-name='Авторизация системы контроля ООО НПП ГА "Луч"'/>
		</section>

		<section class="wrapper container">
			<nuxt />
			<to-up-button/>
		</section>

		<section>
			<FooterTemplate/>
		</section>
	</div>
</template>

<script>
import Vue from 'vue'

import FooterTemplate from "~/components/UI/FooterTemplate";

import PreloaderPage from '~/components/UI/PreloaderPage.vue'

import NavBarLogin from "~/components/Navigation/NavBarLogin";
import ToUpButton from "~/components/UI/ToUpButton";

import PageNameH1 from "~/components/UI/PageNameH1";


export default Vue.extend({
	name: 'LoginLayout',
	components: {ToUpButton, PreloaderPage,NavBarLogin,PageNameH1,FooterTemplate},
})
</script>

<style lang="css">

</style>

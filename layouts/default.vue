<template>
  <div>
    <section id="preloader">
      <PreloaderPage />
    </section>

    <header id="header">
      <NavBar :user="user" :pages="pages" @isToUpButton="isToUpButton"/>
    </header>

		<div class="wrapper">
				<nuxt />
				<to-up-button :showToUpButton="showToUpButton"/>
		</div>

		<footer>
			<FooterTemplate />
		</footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState} from "vuex";

import NavBar from '~/components/Navigation/NavBar.vue'
import PreloaderPage from '~/components/UI/PreloaderPage.vue'

import FooterTemplate from '~/components/UI/FooterTemplate.vue'
import ToUpButton from "~/components/UI/ToUpButton";


export default Vue.extend({
  name: 'NuxtWrapper',
  components: {ToUpButton, NavBar, PreloaderPage, FooterTemplate},

	data(){
		return{
			showToUpButton: true
		}
	},

	computed: {
		...mapState('pages', ['pages']),
		...mapState('user', ['user']),
	},

	methods: {
		...mapActions('pages', [
			'getPages'
		]),
		...mapActions('user', [
			'getUser'
		]),

		isToUpButton(value){
			this.showToUpButton = value
		}
	},


	// eslint-disable-next-line vue/order-in-components
	mounted(){
		this.getPages()
		this.getUser()
	}

})
</script>

<style lang="css">
* {
  font-family: 'Roboto Condensed', sans-serif;
}

/* Прижатие футера */
.wrapper {
	min-height: 83.4vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
}

body {
  min-width: 360px;
}

</style>

<template>
<div>

    <main class="container">
      <section id="pageName">
        <PageNameH1 :page-name="pageName" />
      </section>


			<section class="BlueButtonContainer">
				<ButtonBlue :onClick="newConfig" class="BlueButton">Добавить спецификацию</ButtonBlue>
			</section>

      <section class="">
				<ConfigTable/>
      </section>

    </main>

</div>
</template>

<script>


	import PageNameH1 from '~/components/UI/PageNameH1.vue'
	import ButtonBlue from '~/components/UI/ButtonBlue'
	import ConfigTable from "~/components/Pages/Config/ConfigTable";




	export default {
		name: "ConfigMainPage",
		components:  {PageNameH1, ConfigTable,ButtonBlue},
		data(){
			  return{
					pageName: 'Базовые спецификации',
				}
		},
		methods: {
			newConfig(){
				this.$router.push("/config/new")
			}
		}
	}
</script>

<style lang="css" scoped>

.BlueButtonContainer{
	width: 98%;
	display: inline-flex;
	justify-content: flex-end;
}

.BlueButton{
	align-self: flex-end;
}

</style>

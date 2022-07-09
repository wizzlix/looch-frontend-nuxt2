<template>
  <div>

    <main class="container">
      <section id="pageName">
        <PageNameH1 :page-name="pageName" />
      </section>

			<section class="BlueButtonContainer">
				<ButtonBlue :onClick="newFirmware" class="BlueButton">Добавить прошивку</ButtonBlue>
			</section>

			<section id="table">
				<FirmwaresTable/>
      </section>

    </main>

  </div>
</template>

<script>

	import PageNameH1 from '~/components/UI/PageNameH1.vue'
	import FirmwaresTable from "~/components/Pages/Firmwares/FirmwaresTable";
	import ButtonBlue from "~/components/UI/ButtonBlue";




	export default {
		name: "FirmwaresMainPage",
		components: { PageNameH1,FirmwaresTable, ButtonBlue },
		data(){
			  return{
					pageName: 'Прошивки',
				}
		},
		methods: {
			newFirmware(){
				this.$router.push("firmwares/new")
			}
		}
	}
</script>

<style lang="css">
.BlueButtonContainer{
	width: 98%;
	display: inline-flex;
	justify-content: flex-end;
}

.BlueButton{
	align-self: flex-end;
}
</style>

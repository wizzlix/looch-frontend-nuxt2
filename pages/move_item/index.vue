<template>
	<div>

    <main class="container">
      <section id="pageName">
        <PageNameH1 :page-name="pageName" />
      </section>

      <section class="BlueButtonContainer">
				<ButtonBlue :onClick="newTransfer" class="BlueButton">Добавить трансфер</ButtonBlue>
      </section>

			<section class="table">
				<MoveItemTable/>
      </section>

    </main>

  </div>
</template>

<script>

	import PageNameH1 from '~/components/UI/PageNameH1.vue'
	import ButtonBlue from '~/components/UI/ButtonBlue'
	import MoveItemTable from '~/components/Pages/Move_Item/MoveItemTable'



	export default {
		name: "MoveItemMainPage",
		components: { PageNameH1, ButtonBlue, MoveItemTable},
		data(){
			  return{
					pageName: 'Трансфер',
				}
		},


		methods: {
			newTransfer() {
				this.$router.push("/move_item/new")
			}
		},
	}
</script>

<style lang="css" scoped>

.BlueButtonContainer{
	width: 97%;
	display: inline-flex;
	justify-content: flex-end;
}

.BlueButton{
	align-self: flex-end;
}
</style>

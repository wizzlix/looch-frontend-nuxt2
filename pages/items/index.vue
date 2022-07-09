<template>
  <div>

    <main class="container">
      <section id="pageName">
        <PageNameH1 :page-name="pageName" />
      </section>

			<section class="BlueButtonContainer">
				<ButtonBlue :onClick="newItems" class="BlueButton">Добавить элемент</ButtonBlue>
			</section>


			<section id="table">
				<ItemsTable/>
      </section>
    </main>

  </div>
</template>

<script>

	import PageNameH1 from '~/components/UI/PageNameH1.vue'
	import ButtonBlue from '~/components/UI/ButtonBlue.vue'

	import ItemsTable from "~/components/Pages/Items/ItemsTable";



	export default {
		name: "CustomerMainPage",
		components: { PageNameH1,ItemsTable, ButtonBlue },
		data(){
			  return{
					pageName: 'Платы и изделия',
				}
		},
		methods:{
			newItems() {
				this.$router.push("/items/new")
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

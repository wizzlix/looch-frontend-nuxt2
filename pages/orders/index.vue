<template>
  <div>

    <main class="container">
      <section id="pageName">
        <PageNameH1 :page-name="pageName" />
      </section>

			<section class="BlueButtonContainer">
				<ButtonBlue :onClick="newOrder" class="BlueButton">Добавить заказ</ButtonBlue>
			</section>

			<section id="table">
				<OrdersTable/>
      </section>

    </main>

  </div>
</template>

<script>

	import PageNameH1 from '~/components/UI/PageNameH1.vue'
	import ButtonBlue from '~/components/UI/ButtonBlue'
	import OrdersTable from "~/components/Pages/Orders/OrdersTable";




	export default {
		name: "OrdersMainPage",
		components: { PageNameH1,OrdersTable, ButtonBlue },
		data(){
			  return{
					pageName: 'Заказы',
				}
		},

		methods: {
			newOrder() {
				this.$router.push("/orders/new")
			}
		},
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

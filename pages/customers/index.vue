<template>
  <div>

    <main class="container">

      <section id="pageName">
        <PageNameH1 :page-name="pageName" />
      </section>

			<section class="BlueButtonContainer">
				<ButtonBlue :onClick="newCustomer" class="BlueButton">Добавить заказчика</ButtonBlue>
			</section>

      <section id="table">
				<CustomersTable/>
      </section>

    </main>

  </div>
</template>

<script>
import Vue from 'vue'

import PageNameH1 from '~/components/UI/PageNameH1.vue'
import CustomersTable from '~/components/Pages/Customers/CustomersTable.vue'

import ButtonBlue from '~/components/UI/ButtonBlue'

export default Vue.extend({
  name: 'CustomersMainPage',
  components: {PageNameH1, CustomersTable,ButtonBlue },
  data() {
    return {
      pageName: 'Заказчики',
			content: []
    }
  },

	methods: {
		newCustomer(){
			this.$router.push("/customers/new")
		}
	}
})
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

<template>
	<div>

		<main class="container">

			<section id="pageName">
				<PageNameH1 :page-name="pageName" />
			</section>

			<section class="BlueButtonContainer">
				<ButtonBlue :onClick="newEmployee" class="BlueButton">Добавить сотрудника</ButtonBlue>
			</section>

			<section id="table">
				<EmployeesTable/>
			</section>

		</main>

	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import ButtonBlue from '~/components/UI/ButtonBlue.vue'

import PageNameH1 from '~/components/UI/PageNameH1.vue'
import EmployeesTable from "~/components/Pages/Employees/EmployesTable.vue";


export default Vue.extend({
	name: 'EmployeesMainPage',
	components: {EmployeesTable, PageNameH1,ButtonBlue },
	data() {
		return {
			pageName: 'Персонал',
		}
	},
	methods:{
		newEmployee(){
			this.$router.push("/employees/new")
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

<template>
	<div class="container">
		<PageNameH1 :pageName="$route.prope" />
		<div class="content">
			<PageNameH3>Месторождения</PageNameH3>

			<section class="BlueButtonContainer">
				<ButtonBlue :onClick="newField" class="BlueButton">Добавить месторождение</ButtonBlue>
			</section>

			<section>
				<FieldTable/>
			</section>

			<section>

			</section>

			<PageNameH3>Выполненные рейсы</PageNameH3>
			<FlightsTable/>
		</div>
	</div>
</template>

<script>
import PageNameH1 from "~/components/UI/PageNameH1";
import PageNameH3 from "~/components/UI/PageNameH3";
import FieldTable from "~/components/Pages/Customers/Fields/FieldTable";
import ButtonBlue from "~/components/UI/ButtonBlue";
import FlightsTable from "~/components/Pages/Customers/Fields/FlightsTable";

export default {

	validate({params}) {
		return /^\d+$/.test(params.id)
	},

	name: "EveryCustomer",
	components: {PageNameH1, FieldTable,PageNameH3, ButtonBlue, FlightsTable},

	data(){
		return{
			customerName: String(this.$route.query.customer.name),
		}
	},

	methods:{
		newField(){
			this.$router.push(`/new_field`)
		}
	}
}
</script>

<style scoped lang="scss">


.content{
	margin-top: 70px;
}

.BlueButtonContainer{
	width: 98%;
	display: inline-flex;
	justify-content: flex-end;
}

.BlueButton{
	align-self: flex-end;
}

.flied-table{
	margin-top: 50px;
}
</style>

<template>

	<div>

		<div class='table-responsive'>

			<table id="example" class="table table-striped table-hover table-responsive" style="width:100%">
				<!--  Header  -->
				<thead>


				<tr>
					<th v-for="(header, index) in headers" :key="index">
						<div style="text-align: center;">
							{{ header }}
						</div>
					</th>
				</tr>


				</thead>
				<!--  Body  -->
				<tbody>


				<tr v-for="item in customers" :key="item.id">
					<td>
						<div style="text-align: center;">{{ item.id }}</div>
					</td>

					<td>
						<nuxt-link no-prefetch class="table-link-container" :to="{path: `customers/${item.id}`,query: {customer: customers[item.id-1]}}">
							<div class="table-link" style="text-align: center;">{{ item.name }}</div>
						</nuxt-link>
					</td>
				</tr>


				</tbody>

			</table>
		</div>

	</div>

</template>

<script>

import { mapActions, mapState} from "vuex";

export default {
	name: 'CustomersTable',

	computed: {
		...mapState('customers', [
			'customers'
		]),
	},

	methods: {
		...mapActions('customers', [
			'getCustomers'
		]),
	},

	data () {
		return {
			headers: ["№", "Название организации"],

		}
	},


	mounted(){
		$(document).ready(function () {
			$('#example').DataTable();
		});

		this.getCustomers()

	},

}
</script>

<style scoped lang="scss">

.table-link-container {
	text-decoration: none;
}

.table-link {
	color: $table-link;
	text-decoration: none;

	&:hover{
		text-decoration: none;
		transition-duration: 0.3s;
		transform: scale(1.01);
		cursor: pointer;
	}
}
</style>

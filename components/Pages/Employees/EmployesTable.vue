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


				<tr v-for="(item, index) in employees" :key="index">
					<td>
						<div style="text-align: center;">{{ item.id }}</div>
					</td>

					<td>
						<nuxt-link no-prefetch class="table-link-container" :to="'employees/' + item.id">
							<div class="table-link" style="text-align: center;">{{ item.surname }}</div>
						</nuxt-link>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.name }}</div>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.patron }}</div>
					</td>
				</tr>


				</tbody>
			</table>
		</div>

	</div>

</template>

<script>

import {mapState, mapActions} from "vuex";

export default {
	name: 'EmployeesTable',


	computed: {
		...mapState('employees', ["employees"])
	},

	methods: {
		...mapActions('employees', ['getEmployees'])
	},


	data () {
		return {
			headers: ["№", "Фамилия",  "Имя",  "Отчество"],
		}
	},


	mounted(){
		$(document).ready(function () {
			$('#example').DataTable();
		});
		this.getEmployees()
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

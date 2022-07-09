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
<!--				id: 1,-->
<!--				name: '1.1 Вилка одноконтактная',-->
<!--				designation: 'ЛУЧ.547.01.02.00',-->
<!--				serial: '18385002{вилка}',-->
<!--				circulationTime: '\t370.0',-->

				<tr v-for="(item, index) in items" :key="index">
					<td>
						<div style="text-align: center;">{{ item.id }}</div>
					</td>



					<td>
						<nuxt-link no-prefetch class="table-link-container" :to="'items/' + item.id">
							<div class="table-link" style="text-align: center;">{{ item.name }}</div>
						</nuxt-link>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.designation }}</div>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.serial }}</div>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.circulationTime }}</div>
					</td>

				</tr>


				</tbody>
			</table>
		</div>

	</div>

</template>

<script>

import {mapState, mapGetters, mapActions} from "vuex";

export default {
	name: 'ItemsTable',

	computed: {
		...mapState('items', ['items'])
	},

	methods: {
		...mapActions('items', ['getItems'])
	},

	data: function () {
		return {
			headers: ["№", "Название", "Обозначение", "Серийный номер", "Время циркуляции"],

			// optionValue: null,
			// searchValue: '',
			// endingTemp: "записей",
			// endingZero: '',
			// ending: "записей",
			// smallTextContentAll: "все",
			// minCount: 1,
			// maxCount: 10,
			// allCount: 10,
		}
	},


	// computed: {
	// 	filteredCustomers() {
	// 		return this.customers.filter(item => {
	// 			return item.name.toLowerCase().includes(this.searchValue.toLowerCase());
	// 		})
	// 	},
	// },
	// methods: {
	// 	countRows(value) {
	// 		if (value === "-1") {
	// 			console.log(this.customers.slice(0, this.customers.length));
	// 		} else {
	// 			console.log(this.customers.slice(0, value + 1));
	// 		}
	// 	}
	// },

	mounted(){
		$(document).ready(function () {
			$('#example').DataTable();
		});
		this.getItems()
	},

	// beforeMount() {
	// 	this.getItems()
	// }
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

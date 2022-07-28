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

import {mapState, mapActions} from "vuex";

export default {
	name: 'ItemsTable',

	computed: {
		...mapState('items', ['items'])
	},

	methods: {
		...mapActions('items', ['getItems'])
	},

	data () {
		return {
			headers: ["№", "Название", "Обозначение", "Серийный номер", "Время циркуляции"],
		}
	},

	mounted(){
		$(document).ready(function () {
			$('#example').DataTable();
		});

		this.getItems()
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

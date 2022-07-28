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
				<tr v-for="item in moveitem" :key="item.id">

					<td>

						<!--						todo: Сделать no-prefetch и  :to="item.href + item.id" когда будет бек -->
						<a class="table-link-container"> <!--:to="item.href + item.id"-->
							<div v-for="(compound_item, index) in item.compound" :key="index" class="table-link" style="text-align: center;">
								<div class="text-nowrap">{{ compound_item }}</div>
							</div>
						</a>

					</td>
					<td>
						<!--				todo: Сделать no-prefetch и :to="item.href + item.id" когда будет бек -->
						<a class="table-link-container">  <!--:to="item.href + item.id"-->
							<div class="table-link" style="text-align: center;">{{ item.departure_date }}</div>
						</a>

					</td>
					<td><div style="text-align: center;">{{ item.from }}</div></td>
					<td><div style="text-align: center;">{{ item.to }}</div></td>
					<td><div style="text-align: center;">{{ item.transfer_date }}</div></td>
					<td><div class="commentary" style="text-align: center;" >{{ item.commentary }}</div></td>
					<td>
						<div  v-if=" item.status === 'В пути' " style="text-align: center;" class="onWay">{{ item.status + " " }}
							<br>
							<img class="icon" src="~/static/icons/truck-solid.svg" alt="">
						</div>
						<div  v-else-if=" item.status === 'Доставлен' " style="text-align: center;" class="delivered">{{ item.status + " " }}
							<br>
							<img class="icon" src="~/static/icons/calendar-check-solid.svg" alt="">
						</div>
						<div  v-else style="text-align: center;">{{ item.status }}</div>
					</td>


				</tr>


				</tbody>

			</table>
		</div>

	</div>

</template>

<script>


// vuex
import {mapActions, mapState} from "vuex";

export default {
	name: 'MoveItemTable',

	components: {
	},

	computed: {
		...mapState('moveitem', ['moveitem'])
	},

	methods: {
		...mapActions('moveitem', ['getMoveItems'])
	},

	data() {
		return {
			headers: ["Состав отправления", "Дата отправления", "Откуда", "Куда", "Дата поступления", "Комментарий", "Статус"],

		}
	},

	mounted() {
		$(document).ready(function () {
			$('#example').DataTable();
		});
		this.getMoveItems()
	},


}
</script>

<style scoped lang="scss">

.icon{
	height: 25px;
}

.table-link-container {
	text-decoration: none;
}

.commentary{
	font-size: 12px;
}

.text-nowrap{
	white-space: nowrap;
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

.onWay{
	color: $danger-red;
	font-weight: bolder
}

.delivered{
	color: $submit-green;
	font-weight: bolder;
	font-size: 16px
}

.delivered-icon{
	font-size: 25px;
	margin-top: 2px;
}
.onway-icon{
	font-size: 20px;
	margin-top: 5px;
}

table td {height: 30px; vertical-align: center;} /* выравнивание по верхней границе ячейки */
table td {height: 30px; vertical-align: auto;} /* выравнивание по нижней границе ячейки */
</style>



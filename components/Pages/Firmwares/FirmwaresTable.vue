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

				<tr v-for="(item, index) in firmwares" :key="index">
					<td>
						<div style="text-align: center;">{{ item.id }}</div>
					</td>

					<td>
						<nuxt-link no-prefetch class="table-link-container" :to="'firmwares/' + item.id">
							<div class="table-link" style="text-align: center;">{{ item.name }}</div>
						</nuxt-link>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.dis }}</div>
					</td>

					<td>
						<div class="table-link-container">
							<a class="table-link download" style="text-align: center;" :href="item.download.href" download>{{ item.download.text }}
								<img  class="table-link download-icon" src="~/static/icons/download-solid.svg" alt="">
							</a>
						</div>
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
	name: "FirmwaresTable",

	computed: {
		...mapState('firmwares', ['firmwares'])
	},

	methods: {
		...mapActions('firmwares', ['getFirmwares'])
	},


	data(){
		return{
			headers: ["№", "Название",  "Описание",  "Файл прошивки"],
		}
	},

	mounted(){
		$(document).ready(function () {
			$('#example').DataTable();
		});
		this.getFirmwares()
	},

}
</script>

<style lang="scss" scoped>

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

.download-icon{
	width: 20px;
	height: 20px;
}
.download{
	font-weight: bolder;

	&:hover{
		text-decoration: underline;
		transition-duration: 0.3s;
		transform: scale(1.01);
		cursor: pointer;
	}
}
</style>

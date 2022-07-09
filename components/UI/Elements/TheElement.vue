<template>
		<div class="wrapper-element-create">

			<table class="table table-bordered b-table-no-border-collapse">
				<thead>
					<th>Отправляемые элементы</th>
					<th style="	margin-left: 50px;">Количество</th>
					<th></th>
				</thead>
				<!--				TODO: НЕ ДОДЕЛАНО ~Добавление элементов (мультиселект дублирует данные и не работает (потому что записывает в одну переменную))~ -->
				<tbody>
					<tr>
						<td><multiselect
							v-model="selectedElements"
							class="form-control multiselect"
							tag-placeholder="Добавить новый тег"
							placeholder="Поиск..."
							label="name"
							track-by="id"

							:options="elements"
							:multiple="false" >

						</multiselect></td>
						<td>
							<SelectNumber class="number"/>
						</td>
						<td>
							<button class="btn btn-danger deleteButton" @click="deleteElement($event.path)"><strong>Удалить</strong></button>
						</td>
					</tr>
				</tbody>
			</table>




		</div>
</template>

<script>
import Multiselect from "~/components/vue-multiselect";
import SelectNumber from "~/components/UI/SelectNumber";

export default {
	components: {
		SelectNumber,
		Multiselect
	},

	props:{
		elements: {
			type: Array,
			required: true
		},
	},

	data(){
		return{
			selectedElements: [

			]
		}
	},

	methods: {
		deleteElement(id) {
			// document.querySelector('tr#element').remove();
			console.log(id)
		},
	}

}
</script>

<style scoped>

.deleteButton{
	height: 50px;
}

.multiselect{
	height: 50px;
	max-width: 440px;
}

.number{
	margin-left: 10px;
	padding: 10px;
	height: 54px;
	width: 100px;
}

.wrapper-element-create{
	border: 2px solid rgba(72, 71, 71, 0.24);
	border-radius: 20px;
	padding: 10px;
	margin: 10px;
	display: flex;
	justify-content: space-between;
	height: 160px;
}

@media screen and (max-width: 767px) {
	.wrapper-element-create{
		border: 0;
		border-radius: 0px;
	}
}
</style>

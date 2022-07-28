<template>
	<div>

		<main class="container">

			<ModalWindow :modal-name="'элемент'" v-show="showModal"  :on-click-save="save" :on-click-save-and-push="submit"  :on-click-exit="exit"/>

			<section id="pageName">
				<PageNameH1 :page-name="pageName" />
			</section>

			<section class="BlueButtonContainer">
				<ButtonBlue :on-click="back" class="BlueButton">Назад</ButtonBlue>
			</section>

			<section class="form table-responsive">


				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Название : </span>
					<input v-model="formAnswer.name" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Обозначение : </span>
					<input v-model="formAnswer.designation" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Серийный номер : </span>
					<input v-model="formAnswer.serial" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Тип элемента : </span>
					<multiselect
						aria-describedby="inputGroup-sizing-default"

						v-model="formAnswer.type"
						class="form-control"
						tag-placeholder="Добавить новый тег"
						placeholder="Поиск..."
						label="name"
						track-by="id"


						:options="types"
						:multiple="false" >

					</multiselect>
				</div>


				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Дата изготовления : </span>
					<DateEditor v-model="formAnswer.date"/>
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Макс. время циркуляции : </span>
					<SelectNumber v-model="formAnswer.max_time_cir" value=""/>
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Красная погрешность : </span>
					<SelectNumber v-model="formAnswer.redError" value="100"/>
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Желтая погрешность : </span>
					<SelectNumber v-model="formAnswer.yellowError" value="200"/>
				</div>


				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Заказчик : </span>
					<multiselect
						aria-describedby="inputGroup-sizing-default"

						v-model="formAnswer.customer"
						class="form-control"
						tag-placeholder="Добавить новый тег"
						placeholder="Поиск..."
						label="name"
						track-by="id"


						:options="customers"
						:multiple="false" >

					</multiselect>
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Кто пользуется : </span>
					<multiselect
						class="form-control"
						v-model="formAnswer.whoUsed"
						tag-placeholder="Добавить новый тег"
						placeholder="Поиск..."
						label="name"
						track-by="id"

						:options="customers"
						:multiple="true" >

					</multiselect>
				</div>

				<div class="input-group  element">
					<span class="input-group-text comment" id="inputGroup-sizing-default">Комментарий : </span>
					<!--					<textarea id="startDate" class="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">-->

					<!--					</textarea>-->
					<TextEditor @getContent="getContentTextbox" class="form-control" id="startDate" />
				</div>


				<ButtonBlue :onClick="showModalFunction" class="BlueButton"  data-bs-toggle="modal" data-bs-target="#exampleModal">Добавить</ButtonBlue>

			</section>
		</main>

	</div>
</template>

<script>


import PageNameH1 from '~/components/UI/PageNameH1.vue'
import ButtonBlue from '~/components/UI/ButtonBlue'
import multiselect from "~/components/vue-multiselect/src/Multiselect";
import TextEditor from "~/components/UI/TextEditor";


// UI

import ModalWindow from "~/components/UI/ModalWindow";
import DateEditor from "~/components/UI/DateEditor";
import SelectNumber from "~/components/UI/SelectNumber";



export default {
	name: "NewItems",
	components: {SelectNumber,TextEditor, DateEditor, PageNameH1, ButtonBlue,ModalWindow,multiselect},
	data(){
		return{
			pageName: 'Новый элемент',

			showModal: false,


			formAnswer: {
				name: null,
				designation: null,
				serial: null,
				date: null,
				comment: null,

				max_time_cir: null,
				redError: 100,
				yellowError: 200,

				type: [],
				customer: [],
				whoUsed: [],
			},

			types: [
				{ name: 'Модуль', id: 1 },
				{ name: 'Плата', id: 2 },
				{ name: 'Узел', id: 3 }
			],
			customers: [
				{ name: 'Baker Hughes', id: 1 },
				{ name: 'ПАО "Сургутнефтегаз" УБР-1', id: 2 },
				{ name: 'ООО "ОРИОН"', id: 3 }
			],
		}
	},

	methods: {
		back() {
			this.$router.push("/items")
		},
		showModalFunction(){
			this.showModal = !this.showModal

		},
		submit(){
			console.log("Добавлен элемент")
			this.showModal = !this.showModal
			location.reload()
		},
		save(){
			console.log("Элемент сохранен")
			this.showModal = !this.showModal
		},
		exit(){
			this.showModal = !this.showModal
		},

		getContentTextbox(content){
			this.formAnswer.comment = content;
		},
	},
}
</script>

<style lang="css" scoped>


.input-group{
	min-width: 585px;
}

.BlueButtonContainer{
	width: 97%;
	display: inline-flex;
	justify-content: flex-end;
}

.BlueButton{
	align-self: flex-end;
}

.modal{
	z-index: 9999;
}

.form{
	border: 2px solid rgba(72, 71, 71, 0.24);
	padding: 50px;
	margin: 10px;
}


@media screen and (min-width: 1000px){
	.date{
		width: 26%;
	}
}

@media screen and (max-width: 999px){
	#startDate{min-width: 585px;}
	#endDate{min-width: 585px;}
}

.element{
	margin-bottom: 1.5em

}
</style>


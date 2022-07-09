<template>
	<div>

		<main class="container">

			<ModalWindow :modal-name="'спецификацию'" v-show="showModal"  :on-click-save="save" :on-click-save-and-push="submit"  :on-click-exit="exit"/>

			<section id="pageName">
				<PageNameH1 :page-name="pageName" />
			</section>

			<section class="BlueButtonContainer">
				<ButtonBlue :onClick="back" class="BlueButton">Назад</ButtonBlue>
			</section>

			<section class="form table-responsive">


				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Название : </span>
					<input type="text" placeholder="Введите название " class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Обозначение : </span>
					<input type="text" placeholder="Введите обозначение" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Изображение конфигурации : </span>
					<input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Исполнитель : </span>
					<multiselect
						aria-describedby="inputGroup-sizing-default"

						v-model="selectedExecutor"
						class="form-control"
						tag-placeholder="Добавить новый тег"
						placeholder="Поиск..."
						label="name"
						track-by="id"


						:options="executors"
						:multiple="false" >

					</multiselect>
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Тип элемента: </span>
					<multiselect
						aria-describedby="inputGroup-sizing-default"

						v-model="selectedType"
						class="form-control"
						tag-placeholder="Добавить новый тег"
						placeholder="Поиск..."
						label="name"
						track-by="id"


						:options="types"
						:multiple="false" >

					</multiselect>
				</div>

				<div class="input-group mb-3">
					<div class="input-group-text">
						<input class="form-check-input mt-0" checked type="checkbox" value="" aria-label="Checkbox for following text input">
					</div>
					<span class="input-group-text" id="inputGroup-sizing-default">Наличие серийного номера</span>
				</div>

					<div class="sep"></div>
				<div class="input-group mb-3">
					<div class="input-group-text">
						<input class="form-check-input mt-0" checked type="checkbox" value="" aria-label="Checkbox for following text input">
					</div>
					<span class="input-group-text" id="inputGroup-sizing-default">Входит в структуру сборки заказа</span>
				</div>

				<addElement :elements="elements" page-name="Из чего состоит:"/>

				<ButtonBlue :onClick="showModalFunction" class="BlueButton"  data-bs-toggle="modal" data-bs-target="#exampleModal">Добавить</ButtonBlue>

			</section>
		</main>

	</div>
</template>

<script>

import Multiselect from "~/components/vue-multiselect";
import PageNameH1 from '~/components/UI/PageNameH1.vue'
import ButtonBlue from '~/components/UI/ButtonBlue'


// UI

import ModalWindow from "~/components/UI/ModalWindow";
import addElement from "~/components/UI/Elements/addElement";



export default {
	name: "NewConfig",
	components: { PageNameH1, ButtonBlue,ModalWindow,Multiselect,addElement},
	data(){
		return{
			pageName: 'Новыая спецификация',

			showModal: false,


			selectedType: [

		],

			elements: [
				{ name: '2.4 Сцинтиблок : ЛУЧ.602.01.02.00 - TH7345 154-09.19', id: 1 },
				{ name: 'Адаптер USB-4UART : ОКР.057.00.02.00 - 22-51-2', id: 2 },
				{ name: 'Адаптер USB-BLE5-BT52 : ЛУЧ.950.00.04.00 - 21-371-2', id: 3 }
			],

			types: [
			{ name: 'Модуль', id: 1 },
			{ name: 'Плата', id: 2 },
			{ name: 'Узел', id: 3 }
		],

			selectedExecutor: [
			// { name: 'Javascript', code: 'js' }
		],
			executors: [
			{ name: 'Производство 1', id: 1 },
			{ name: 'Производство 2', id: 2 },
			{ name: 'Производство 3', id: 3 }
		],

		}
	},

	computed: {
	},


	methods: {
		back() {
			this.$router.push("/config")
		},

		showModalFunction(){
			this.showModal = !this.showModal

		},
		submit(){
			console.log("Добавлена спецификация")
			this.showModal = !this.showModal
			location.reload()
		},
		save(){
			console.log("Спецификация сохранена")
			this.showModal = !this.showModal
		},
		exit(){
			this.showModal = !this.showModal
		}
	},
}
</script>

<style lang="css" scoped>

.sep{
	margin: 0 20px;
}

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


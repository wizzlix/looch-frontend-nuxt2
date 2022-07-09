<template>
	<div>

		<main class="container">

			<ModalWindow v-show="showModal" :modal-name="'заказ'"  :on-click-save="save" :on-click-save-and-push="submit" :on-click-exit="exit"/>

			<section id="pageName">
				<PageNameH1 :page-name="pageName" />
			</section>

			<section class="BlueButtonContainer">
				<ButtonBlue :on-click="back" class="BlueButton">Назад</ButtonBlue>
			</section>

			<section class="form table-responsive">



				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Номер заказа : </span>
					<SelectNumber value="" class="form-control" aria-describedby="inputGroup-sizing-default"/>
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Дата открытия заказа : </span>
					<DateEditor class="form-control" aria-describedby="inputGroup-sizing-default"/>
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Дата планового закрытия : </span>
					<DateEditor class="form-control" aria-describedby="inputGroup-sizing-default" />
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Дата фактического закрытия : </span>
					<DateEditor class="form-control" aria-describedby="inputGroup-sizing-default" />
				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Заказчик : </span>

					<multiselect
						aria-describedby="inputGroup-sizing-default"

						v-model="selectedCustomer"
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
					<span class="input-group-text" id="inputGroup-sizing-default">Комментарий : </span>
					<TextEditor class="form-control" id="startDate" />
				</div>

				<addElement :elements="elements" page-name="Из чего состоит:"/>

				<ButtonBlue :onClick="showModalFunction" class="BlueButton"  data-bs-toggle="modal" data-bs-target="#exampleModal">Добавить</ButtonBlue>

			</section>
		</main>

	</div>
</template>

<script>

import Multiselect from '~/components/vue-multiselect'
import SelectNumber from "~/components/UI/SelectNumber";
import addElement from "~/components/UI/Elements/addElement";

import PageNameH1 from '~/components/UI/PageNameH1.vue'
import ButtonBlue from '~/components/UI/ButtonBlue'

import TextEditor from "~/components/UI/TextEditor.vue"
import DateEditor from "~/components/UI/DateEditor.vue"


// UI

import ModalWindow from "~/components/UI/ModalWindow";

// vuex



export default {
	name: "NewOrder",
	components: { PageNameH1, ButtonBlue,ModalWindow,TextEditor,DateEditor,Multiselect,SelectNumber,addElement},
	data(){
		return{
			pageName: 'Новый заказ',

			showModal: false,

			id_element: 0,

			// Multiselect

			selectedCustomer: [

			],

			customers: [
				{ name: 'Baker Hughes', id: 1 },
				{ name: 'ПАО "Сургутнефтегаз" УБР-1', id: 2 },
				{ name: 'ООО "ОРИОН"', id: 3 }
			],

			selectedElements: [
				// { name: 'Javascript', code: 'js' }
			],
			elements: [
				{ name: '2.4 Сцинтиблок : ЛУЧ.602.01.02.00 - TH7345 154-09.19', id: 1 },
				{ name: 'Адаптер USB-4UART : ОКР.057.00.02.00 - 22-51-2', id: 2 },
				{ name: 'Адаптер USB-BLE5-BT52 : ЛУЧ.950.00.04.00 - 21-371-2', id: 3 }
			]

		}
	},

	computed: {
	},


	methods: {
		back() {
			this.$router.push("/orders")
		},

		showModalFunction() {
			this.showModal = !this.showModal

		},
		submit() {
			console.log("Добавлен заказ")
			this.showModal = !this.showModal
			location.reload()
		},
		save() {
			console.log("Заказ сохранен")
			this.showModal = !this.showModal
		},
		exit() {
			this.showModal = !this.showModal
		},


		nameId() {
			const element = "element_" + (this.id_element).toString();
			this.id_element++
			return element
		},
	}
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



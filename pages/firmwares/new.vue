<template>
	<div>

		<main class="container">

			<ModalWindow :modal-name="'прошивку'" v-show="showModal"  :on-click-save="save" :on-click-save-and-push="submit"  :on-click-exit="exit"/>


			<section id="pageName">
				<PageNameH1 :page-name="pageName" />
			</section>

			<section class="BlueButtonContainer">
				<ButtonBlue :onClick="back" class="BlueButton">
					Назад
				</ButtonBlue>
			</section>

			<section class="form table-responsive">

				<div class="input-group  element">
					<span class="input-group-text comment" id="inputGroup-sizing-default">Описание : </span>
<!--					TODO: Не работает v-model-->
					<TextEditor @getContent="getContentTextbox" class="form-control" id="startDate" />
				</div>

				<div class="input-group  element">
					<span class="input-group-text comment" id="inputGroup-sizing-default">Загрузить файл : </span>
					<input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
				</div>

				<ButtonBlue :onClick="showModalFunction" class="BlueButton"  data-bs-toggle="modal" data-bs-target="#exampleModal">Добавить</ButtonBlue>

			</section>

		</main>

	</div>
</template>

<script>

import PageNameH1 from '~/components/UI/PageNameH1.vue'
import ButtonBlue from '~/components/UI/ButtonBlue'


// UI

import TextEditor from "~/components/UI/TextEditor";
import ModalWindow from "~/components/UI/ModalWindow";


export default {
	name: "NewFirmware",
	components: { PageNameH1, ButtonBlue,TextEditor,ModalWindow},
	data(){
		return{
			pageName: 'Новая прошивка',

			showModal: false,

			formAnswer:{
				description: "",
			}

		}
	},




	methods: {
		back() {
			this.$router.push("/firmwares")
		},

		showModalFunction(){
			this.showModal = !this.showModal

		},
		submit(){
			console.log("Добавлена прошивка")
			this.showModal = !this.showModal
			location.reload()
		},
		save(){
			console.log("Прошивка сохранена")
			this.showModal = !this.showModal
		},
		exit(){
			this.showModal = !this.showModal
		},

		getContentTextbox(content){
			this.formAnswer.description = content;
		}
	},
}
</script>

<style lang="css" scoped>
.comment{
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


.form{
	border: 2px solid rgba(72, 71, 71, 0.24);
	padding: 50px;
	margin: 10px;
}

.element{
	margin-bottom: 1.5em

}
</style>


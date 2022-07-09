<template>
		<section id="pageName">
			<PageNameH1 :page-name="pageName" />

			<div id="element-list">
					<TheElement class="root-element" :elements="elements"/>
<!--				TODO: Убрать-->
					<h5 style="color:red">ПРИ ДОБАВЛЕНИИ НОВОГО НЕ РАБОТАЕТ МУЛЬТИСЕЛЕКТ (ВИДИМО БУДЕМ ИСПОЛЬЗОВАТЬ ДРУГОЙ ДЛЯ ЭТОГО КОМПОНЕНТА)</h5>
			</div>


			<button class="btn btn-success btnAdd" @click.prevent="createNewElement">
				<strong>Добавить еще один элемент</strong>
			</button>


		</section>
</template>

<script>

import PageNameH1 from "~/components/UI/PageNameH1";
import TheElement from "~/components/UI/Elements/TheElement";

export default {

	components: {
		TheElement,
		PageNameH1
	},

	props:{
		pageName: {
			type: String,
			required: true
		},
		elements: {
			type: Array,
			required: true
		},
	},

	methods: {
		createNewElement(){

			$(document).find(".root-element").clone().removeClass('root-element').addClass('copy-element').appendTo("#element-list")

			// const $NewElement = $(".root-element")[0];
			// console.log($NewElement)
			// $NewElement.clone()
			// const $ElementList = $("#element-list");
			//
			// $ElementList[0].append( $NewElement[0] );
		}
	}

}
</script>

<style lang="scss" scoped>

.btnAdd{
	margin-left: 20px;
	margin-right: 20px;
	margin-bottom: 50px;
}


</style>

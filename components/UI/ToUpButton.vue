<template>
	<div class="flex">
		<ButtonBlue id="button" class="to-up btn-primary" :on-click="ToUp" title="Наверх">
			<img class="icon" src="/icons/toUp.png" alt="">
		</ButtonBlue>
	</div>
</template>


<script>

import ButtonBlue from "~/components/UI/ButtonBlue";
export default {
	components: {ButtonBlue},

	props:{
		showToUpButton: {
			type: Boolean,
			require: true
		}
	},

	mounted(){
			const btn = $('#button');
			const isShow = Number(localStorage.isShowToUp)
			console.log(Number(localStorage.isShowToUp))
			$(window).scroll(function() {
				if ($(window).scrollTop() > 250 && isShow) {
					btn.addClass('show');
				} else {
					btn.removeClass('show');
				}
			});
	},


	methods:{
		ToUp(){
			$('html, body').animate({scrollTop:0}, '300');
		}
	}
}
</script>

<style lang="scss" scoped>

	.flex{
		width: 99%;
		display: inline-flex;
		justify-content: flex-end;
	}

	.icon{
		height: 30px;
		filter: invert(1);
	}

	#button.show {
		opacity: 0.8;
		visibility: visible;
	}

	.to-up {
		display: inline-block;
		text-align: center;
		border-radius: 4px;
		margin: 30px;
		position: fixed;
		bottom: 30px;
		right: 30px;
		z-index: 1000;


		transition: 0.5s,
		opacity .5s, visibility .5s;
		opacity: 0;
		visibility: hidden;


		&:hover {
			cursor: pointer;
			background-color: $table-link;
			opacity: 0.6;


			-webkit-box-shadow: 11px 11px 8px -5px rgba(34, 60, 80, 0.2);
			-moz-box-shadow: 11px 11px 8px -5px rgba(34, 60, 80, 0.2);
			box-shadow: 11px 11px 8px -5px rgba(34, 60, 80, 0.2);
		}
		&:active {
			background-color: #555;
		}


	}

</style>

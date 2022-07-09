<template>
	<div>
		<section>
			<!-- Modal -->
			<div id="exampleModal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false" role="dialog" data-bs-backdrop="static" data-bs-keyboard="false">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 id="exampleModalLabel" class="modal-title">Добавить {{modalName}}?</h5>
							<UIButtonBlue :on-click="onClickExit" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></UIButtonBlue>
						</div>
						<div class="modal-body">
							<h6 class="small-text">Если вы хотите сохранить запись, и продолжить ее редактирование - нажмите
								<br><span>"Сохранить и продолжить"</span></h6>
							<h6 class="small-text">Если вы хотите отправить запись в базу - нажмите
								<br><span>"Сохранить"</span></h6>
						</div>
						<div class="modal-footer">
							<UIButtonBlue :on-click="onClickExit" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</UIButtonBlue>
							<UIButtonBlue :on-click="onClickSave" data-bs-dismiss="modal">Сохранить и продолжить</UIButtonBlue>
							<UIButtonBlue :on-click="onClickSaveAndPush">Сохранить</UIButtonBlue>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>




export default {

	props: {
		onClickSave: {
			type: Function,
			required: true,
		},
		onClickSaveAndPush: {
			type: Function,
			required: true,
		},
		onClickExit: {
			type: Function,
			required: true
		},
		modalName: {
			type: String,
			required: true
		}
	},
}
</script>


<style lang="scss" scoped>
.modal{
	z-index: 9999;
}
.small-text{
	color: $modal-small-text;
	font-size: 13px;
	font-stretch: semi-condensed;
	span{
		font-size:  14px;
		font-weight: bolder;
	}
}
</style>

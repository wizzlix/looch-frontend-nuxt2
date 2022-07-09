<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-4 col-md-6 col-sm-12 col">

				<div class="card">
					<div class="card-body">
						<PageNameH5 class="form-title" page-name="Вы успешно вышли из системы"/>

						<form method="post">

							<ButtonBlue :on-click="redirect" class="btn btn-primary btn-block">Перейти на страницу входа</ButtonBlue>
						</form>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import PageNameH5 from "~/components/UI/PageNameH5";
import ButtonBlue from "~/components/UI/ButtonBlue";

export default {
	components: {PageNameH5,ButtonBlue},

	layout: "login",

	methods:{
		redirect(){
			this.$router.push('/login')
		}
	}

}
</script>

<style lang="scss" scoped>
.card{
	padding: 0 30px;
	margin-top: 10px;
}

.col{
	margin-top: 10%;
	margin-left: 30px
}

.form-title{
	margin-top: 0;
}

.btn{
	margin-top: 10px;
}


@media (min-width: 1400px){
	.btn{
		margin-left: 30px;
	}
}
</style>

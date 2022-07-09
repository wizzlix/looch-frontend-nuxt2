<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-4 col-md-6 col-sm-7 col">

				<div class="card">
					<div class="card-body">
						<PageNameH5 class="form-title" page-name="Введите свои данные"/>

						<form method="post">
							<input type="hidden" name="csrfmiddlewaretoken" value="OKZzZo8LEmLpJ9hdZPmTDlkOf7PQZMkWZmCdsxvKtJobB90KHUZbp8DU6fYMYJdD">
							<input type="hidden" name="next" value="">


							<div id="div_id_username" class="form-group"> <label for="id_username" class="col-form-label  requiredField">
								<strong>
									Имя пользователя
								</strong>
							<span class="asteriskField">*</span>
							</label> <div class="">
								<input type="text" name="username" autofocus class="textinput textInput form-control" required id="id_username">
							</div> </div> <div id="div_id_password" class="form-group"> <label for="id_password" class="col-form-label  requiredField">
								<strong>
									Пароль
								</strong>
							<span class="asteriskField">*</span> </label> <div class=""> <input type="password" name="password" class="textinput textInput form-control" required id="id_password"> </div> </div>


							<ButtonBlue :on-click="redirect" class="btn btn-primary btn-block">Войти</ButtonBlue>
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
			this.$router.push('/')
		}
	}

}
</script>

<style lang="scss" scoped>
.card{
	padding: 0 30px;
	margin: 10px;
}

.col{
	margin-top: 10%;
	margin-left: 30px
}

.form-title{
	margin-top: 0;
}

.btn{
	width: 158px;
	margin-top: 10px
}
</style>

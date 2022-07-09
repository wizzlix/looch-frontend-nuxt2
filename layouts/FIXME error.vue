<template>
	<div class="container error-box">
			<div class="error-text">
				<img src="logo.png" alt="">
				<h1> <center> Произошла ошибка...  </center><br> Через <strong> {{counter}} </strong> секунды вы будете перенаправлены на главную страницу.</h1>
				<h5 class="dont-reboot"> <center>Не перезагружайте страницу!</center></h5>
			</div>
	</div>
</template>

<script>

	export default {
		name: "ErrorComponent",

		data(){
			return{
				counter: 3
			}
		},


		mounted() {
			function redirect() {
				window.location.href = '/'
			}


			if (this.counter > 0){
			setInterval(() =>{
				if (this.counter < 2){
					this.counter = 1
				} else {this.counter--} },1000)
			}

			setTimeout(redirect,2900)
			setTimeout(clearInterval(),3000)

		},
	}
	  
</script>

<style lang="css" scoped>
.error-box{
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center
}

.error-text{
	margin: 0 auto;
	align-self: center;
}

.dont-reboot{
	text-decoration: underline;

}
</style>
<template>
	<div id="NavBar" class="">
		<div id="top"></div>
		<nav class="looch-navbar navbar navbar-expand-lg navbar-dark">
			<div class="container-fluid">
				<nuxt-link class="navbar-brand" to="/"
				><img src="~/static/logo.png" alt="ЛУЧ" title="Главная" style="cursor: pointer; "
				/></nuxt-link>

				<button
					style="visibility: hidden"
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

			</div>
		</nav>
	</div>
</template>

<script>


export default {
	name: 'NavBarLogin',

}
</script>

<style lang="scss">

.looch-navbar {
	background-color: $main-blue;
	-webkit-box-shadow: 0px 20px 15px 3px rgba(34, 60, 80, 0.1);
	-moz-box-shadow: 0px 20px 15px 3px rgba(34, 60, 80, 0.1);
	box-shadow: 0px 20px 15px 3px rgba(34, 60, 80, 0.1);
}

.navbar-dark .navbar-nav .nav-link {
	color: $text-color;
	font-size: 20px;
	text-shadow: 4px 2px 4px rgba(0, 0, 0, 0.35);
}

.shadow{
	text-shadow: 4px 2px 4px rgba(0, 0, 0, 0.35);
}
</style>

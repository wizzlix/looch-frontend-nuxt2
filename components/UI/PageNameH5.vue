<template>
	<div id="PageNameH1">

		<h5 class="title">
			<div style="text-align: center;">
				<i>
					<strong>
						{{pageName}}
					</strong>
				</i>
			</div>
		</h5>

		<div class="container-fluid">
			<hr class="dropdown-divider">
		</div>
	</div>
</template>

<script>

export default {
	name: "PageNameH1",

	props:{
		pageName: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>

.title {
	margin-top: 2rem;
	margin-bottom: 2rem;
}

</style>

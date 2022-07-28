<template>
		<div class="footer-box">
			<div class="footer"></div>
		</div>
</template>

<script>
export default {
  name: 'FooterTemplate',
}
</script>


<style lang="scss" scoped>

.footer {
  background-color: $main-blue;
  height: 100px;
}

@media (max-width: 992px){
	.footer{
		margin-top: 30px;
	}
}
</style>

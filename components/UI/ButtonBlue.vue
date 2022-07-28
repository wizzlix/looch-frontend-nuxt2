<template>
		<button type="button"  class="btn btn-info" @click="onClick">
			<strong>
				<slot></slot>
			</strong>
		</button>
</template>

<script>
	export default {
		props: {
			onClick: {
				type: Function,
				required: true
			}
		},
	}
</script>

<style lang="scss" scoped>

.btn-info{
  background-color: $main-blue;
	border: 0px;
	color: $text-color;
}
</style>

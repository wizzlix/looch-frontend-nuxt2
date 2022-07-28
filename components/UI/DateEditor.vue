<template>
	<div>
		<input
								type="datetime-local"
								class="form-control"

								aria-describedby="inputGroup-sizing-default"

								:value="value"
								@input="$emit('input', $event.target.value)">
	</div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/require-prop-types
	props: ['value']
}
</script>

<style scoped>

</style>

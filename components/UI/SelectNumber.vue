<template>
		<input
			type="number"
			placeholder="Введите число"
			class="form-control"
			aria-label="Sizing example input"
			min="0"
			aria-describedby="inputGroup-sizing-default"

			:value="value"
			@input="$emit('input', $event.target.value)">
</template>

<script>
export default {
	props: {
		value: {
			type: Number,
			default: 0
		}
	},
}
</script>

<style scoped>

</style>

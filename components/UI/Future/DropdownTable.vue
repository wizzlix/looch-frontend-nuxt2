<template>
  <div>
    <div class="btn-group btn-table-rows">
      <button
        type="button"
        class="btn btn-info dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <label>
					Показать <strong>{{ optionValue }}</strong> {{ ending }}
				</label>
      </button>

      <ul class="dropdown-menu">
				<li><option class="dropdown-item" value="10" 	@click="optionValue = $event.target.textContent, ending=endingTemp ">10</option></li>
				<li><option class="dropdown-item" value="25" 	@click="optionValue = $event.target.textContent, ending=endingTemp ">25</option></li>
				<li><option class="dropdown-item" value="50" 	@click="optionValue = $event.target.textContent, ending=endingTemp ">50</option></li>
				<li><option class="dropdown-item" value="100" @click="optionValue = $event.target.textContent, ending=endingTemp ">100</option></li>

				<li><hr class="dropdown-divider"></li>

				<li><option class="dropdown-item" value="-1"	@click="optionValue = smallTextContentAll, ending=endingZero ">  Все  </option></li>
			</ul>

    </div>
  </div>
</template>

<script>
export default {
	name: "DropdownTable",

	data() {
        return {
            optionValue: null,

            endingTemp: "записей",
            endingZero: '',
            ending: "записей",
            smallTextContentAll: "все",
        }
    },
}
</script>

<style lang="scss" scoped>

.btn-info{
  background-color: $main-blue;
}

</style>

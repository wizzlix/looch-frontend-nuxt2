<template>
  <div>
    <form>
      <input
        v-model="searchValue"
        class="form-control btn-table-rows search"
        type="search"
        placeholder="Поиск"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchTable',

  props: {
    search: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      searchValue: '',
			filterObjects: this.search,

    }
  },

  // watch: {
  //   searchValue() {

	// 		if (this.searchValue !== ''){
	// 			this.filterObjects = []
	// 			this.search.filter(element => {
	// 				if (element.name.toLowerCase().includes(this.searchValue.toLowerCase())){
	// 					this.filterObjects.push(element)
	// 				}
	// 				return element
	// 			})  
	// 			return this.$emit('search', this.filterObjects )
	// 		} else {
	// 			this.filterObjects = this.search
	// 			return this.filterObjects
	// 		}
		
	// 		// console.log("--------------------------------")
  //     // return this.search.filter(element => {
	// 		// 	return console.log(element.id.toString() + " " + element.name.includes(this.searchValue).toString());
	// 		// })
  //   },
  // },

	computed: {
		filterObjects(){
			return this.search.filter(element => {
				return this.$emit("search",element.indexOf(this.searchValue) !== -1)
			})
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
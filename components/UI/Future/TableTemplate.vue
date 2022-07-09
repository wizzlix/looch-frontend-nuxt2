<template>
<div>
	<div class='table-responsive'>
		<EmptyTable/>
	</div>
</div>
</template>

<script>
	export default {
		name: 'TableTemplate',

		components: {},

		props: {
			EmptyTable: {
				type: Array,
				required: true,
			},
  	},

		mounted(){
			$(document).ready(function () {
				$('#example').DataTable();
			});
		},
	}
</script>

<style lang="scss" scoped>



.control {
  display: inline-flex;
  width: 97%;
  margin: 15px;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.btn-info{
  background-color: $main-blue;
}

.dropdown-table {
  align-self: flex-start;
}

.search-table {
  margin-left: 10px;
  justify-self: center;
  align-self: flex-end;
}

@media (max-width: 509px) {
  .control {
    width: 95%;
  }
}

.table-link {
  text-decoration: none;
  color: $table-link;
}

.customers {
  color: $table-link;
}

.customers:hover {
  text-decoration: none;
  transition-duration: 0.3s;
  transform: scale(1.01);
}
.title-pagination-container{
	display: inline-flex;
	width: 100%;
	justify-content: space-between;
}

.pagination{
	margin-left: 10px;
}

.title {
  border-left: 1rem solid #4b535a57;
  padding-left: 5px;
  color: #707070;
	margin-right: 10px;
	padding-right: 10px;

  margin-top: 5px;
}

.not-found{
	font-weight: bolder;
	font-style: italic;
}

</style>

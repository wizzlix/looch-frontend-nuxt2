<template>
  <div id="NavBar" class="">
		<div id="top"></div>
    <nav class="looch-navbar navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand" to="/"
          ><img src="~/static/logo.png" alt="ЛУЧ" title="Главная" style="cursor: pointer; "
        /></nuxt-link>

        <button
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

        <div id="navbarText" class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <NavModuleDropdown :pages="pages" />

            <NavElement :pages="pages" />
          </ul>
          <span>
            <NavUser @isToUpButton="isToUpButton" :user="user" />
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import NavElement from '~/components/Navigation/NavElement.vue'
import NavModuleDropdown from '~/components/Navigation/NavModuleDropdown.vue'
import NavUser from '~/components/Navigation/NavUser.vue'

export default {
  name: 'NavBar',

  components: {
    NavUser,
    NavModuleDropdown,
    NavElement,
  },

	methods: {
		isToUpButton(value){
			return this.$emit("isToUpButton", value)
		}
	},

	props: {
		user: {
			type: Object,
			require: true
		},
		pages: {
			type: Array,
			require: true
		}
	},

	mounted() {
		this.isToUpButton()
	}
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

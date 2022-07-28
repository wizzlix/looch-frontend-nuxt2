<template>
  <div id="NavModuleDropdown" class="block__modules">
    <li class="nav-item dropdown">
      <a
        id="navbarDropdownMenuLink"
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
				<strong>{{ pageDropdown.name }}</strong>
      </a>

      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li v-for="(subpage, index) in pageDropdownSubpages" :key="index">
          <nuxt-link no-prefetch class="dropdown-item" :to="subpage.href">
            <i>
							<strong>{{ subpage.name }}</strong>
						</i>
            <hr class="dropdown-divider" />
          </nuxt-link>
        </li>
      </ul>
    </li>
  </div>
</template>

<script>


export default {
  name: 'NavModuleDropdown',

  props: {
    pages: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      pageDropdown: this.pages[0],
      pageDropdownSubpages: this.pages[0].subpages,
    }
  },
}
</script>


<style scoped>
.navbar-dark .navbar-nav .nav-link {
  right: 0;
  left: auto;
  text-shadow: 4px 2px 4px rgba(0, 0, 0, 0.4);
}

@media (max-width: 1420px) and (min-width: 992px) {
  .block__modules {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-item .dropdown {
    align-self: center;
  }
}

@media (max-width: 991px) {
  .block__modules {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px 30px;
  }
  .nav-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.091);
    width: 200px;
  }
}
</style>

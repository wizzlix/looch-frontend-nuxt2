<template>
	<div id="NavUser" class="block__user">
		<ul class="user">
			<li class="nav-item navbar-dark navbar-nav nav-link dropdown">
				<a
					id="navbarDropdownMenuLink"
					class="nav-link dropdown-toggle"
					href="#"
					role="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<strong>
						<i>
							{{ userName }}
						</i>
					</strong>
				</a>
				<ul class="dropdown-menu drop" aria-labelledby="navbarDropdownMenuLink">
					<li class="about"><strong>Имя: </strong>{{ userName }}</li>

					<li><hr class="dropdown-divider" /></li>


					<div class="form-check form-switch">
						<input v-model="checkedToUpButton" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
						<label class="form-check-label" for="flexSwitchCheckDefault">Показывать кнопку прокрутки страницы</label>

						<!--				TODO: Убрать-->
						<h6>checkedToUp : {{checkedToUpButton}}</h6>
						<h6 style="color:red"> ПОКА НЕ РАБОТАЕТ</h6>


					</div>

					<li><hr class="dropdown-divider" /></li>
					<!--          <li class="about">-->
					<!--            <strong>Компания: </strong>{{ userCompanyName }}-->
					<!--          </li>-->

					<!--          <li><hr class="dropdown-divider" /></li>-->

					<button
						class="btn btn-danger btn-exit"
						@click="$router.push('/logout')"
					>
						Выйти
					</button>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
// import's

export default {
	name: 'NavUser',

	props: {
		user: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			userName: this.user.name,
			checkedToUpButton: false
		}
	},

	watch: {
		checkedToUpButton(newValue){
			return this.$emit("checkedToUpButton", newValue)
		}
	}


}
</script>


<style scoped>
.block__user {
	box-sizing: border-box;
	max-width: 500px;
	display: inline-block;
	margin-left: 2rem;
	border-left: 2px solid rgba(255, 255, 255, 0.5);
}

@media (max-width: 1125px) {
	.block__user {
		border-left: none;
	}
}

.user {
	list-style: none;
	margin-bottom: 0rem !important;
	/*text-shadow: 4px 2px 4px rgba(0, 0, 0, 0.99);*/
	flex-direction: column;
	padding-left: 10px !important;
	margin-left: 10px !important;
}

.drop {
	flex-flow: column;
	max-width: 500px;
}

.btn-exit {
	align-self: flex-end;
	width: 100px;
}

.navbar-nav .dropdown-menu {
	right: 0;
	left: auto;
	padding: 10px;
	border-radius: 5%;
}

.about {
	text-shadow: none;
	width: 100%;
	padding: 5px;
}
</style>

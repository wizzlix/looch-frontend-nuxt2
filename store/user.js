export const state = () => ({
	user: {name: "Дмитрий Братчиков"}
})

export const actions = {
	getUser({commit}){
		// const content = await axios.post('link');
		const content = {name: "Дмитрий Братчиков"}
		commit('addUser', content)
	}
}

export const mutations = {
	addUser(state, content){
		state.user = content
	}
}

export const state = () => ({
	items: []
})

export const getters = {

}

export const actions = {
	async getItems({commit}){
		// const content = await axios.post('link');
		const content = [
			{
				id: 1,
				name: '1.1 Вилка одноконтактная',
				designation: 'ЛУЧ.547.01.02.00',
				serial: '18385002{вилка}',
				circulationTime: '\t370.0',
			},
			{
				id: 2,
				name: '1.1 Вилка одноконтактная',
				designation: 'ЛУЧ.547.01.02.00',
				serial: '18385001{вилка}',
				circulationTime: '\t1065.0',
			},
			{
				id: 3,
				name: '1.1 Вилка одноконтактная',
				designation: '\tЛУЧ.547.01.02.00',
				serial: '\t20610003{вилка}',
				circulationTime: '0.0',
			},
		]
		commit('addItems', content)
	}
}

export const mutations = {
	addItems(state, content){
		state.items = content
	}
}

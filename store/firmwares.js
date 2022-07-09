export const state = () => ({
	firmwares: []
})

export const getters = {

}

export const actions = {
	async getFirmwares({commit}){
		// const content = await axios.post('link');
		const content = [
			{id:1,
				name: "4_2_ЛУЧ-172 Тестирование скважинной части комплекса (ред 11 от 2021_11_30)",
				dis:"Инструкция \"Тестирование скважинной части\"",
				download: {text: "Скачать", href: "media/Прошивка"}
			},
			{id:2,
				name: "21_10_2021_Colibri5_NDM_INCL_many_calib_points_delta_5deg",
				dis:"Спецверсия колибри5 (такой в репозитории нету).\n" +
					"\n" +
					"Изменены точки для калибровки зенитометра (752.03), пробегают диапазон от 0 до 180 градусов через 5 градусов.",
				download: {text: "Скачать", href: "media/Прошивка2"}
			},
		]
		commit('addFirmwares', content)
	}
}

export const mutations = {
	addFirmwares(state, content){
		state.firmwares = content
	}
}

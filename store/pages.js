export const state = () => ({
	// TODO: Сделать динамическую подгрузку
	pages : [
		{name: 'Модули', icon: ``,href: '/modules',visible: true,subpages: [
				{name: 'Выпущенные модули', icon:`/icons/pages/modules.svg` , href: '/modules',visible: true,subpages: null,last: false,},
				{name: 'Ремонты модулей', icon:`/icons/pages/repairs.svg` , href: '/repairs',visible: true,subpages: null,last: true,}],
		},
		{ name: 'Заказы', icon:`/icons/pages/orders.svg` ,  href: '/orders', visible: true, subpages: null },
		{ name: 'Платы и изделия', icon:`/icons/pages/items.svg` ,  href: '/items', visible: true, subpages: null },
		{ name: 'Прошивки', icon:`/icons/pages/firmwares.svg` ,  href: '/firmwares', visible: true, subpages: null },
		{name: 'Заказчики', icon:`/icons/pages/customers.svg` , href: '/customers',visible: true,subpages: null,},
		{ name: 'Персонал', icon:`/icons/pages/employees.svg` ,  href: '/employees', visible: true, subpages: null },
		{name: 'Базовые спецификации', icon:`/icons/pages/config.svg` , href: '/config',visible: true,subpages: null,},
		{ name: 'Трансфер', icon:`/icons/pages/move_item.svg` ,  href: '/move_item', visible: true, subpages: null },
	]
})


export const getters = {

}

export const actions = {
	getPages({commit}){
		// TODO: Сделать универсальный экшн
		// const content = await axios.post('link');
		const content = [
			{name: 'Модули', icon: ``,href: '/modules',visible: true,subpages: [
					{name: 'Выпущенные модули', icon:`/icons/pages/modules.svg` , href: '/modules',visible: true,subpages: null,last: false,},
					{name: 'Ремонты модулей', icon:`/icons/pages/repairs.svg` , href: '/repairs',visible: true,subpages: null,last: true,}],
			},
			{ name: 'Заказы', icon:`/icons/pages/orders.svg` ,  href: '/orders', visible: true, subpages: null },
			{ name: 'Платы и изделия', icon:`/icons/pages/items.svg` ,  href: '/items', visible: true, subpages: null },
			{ name: 'Прошивки', icon:`/icons/pages/firmwares.svg` ,  href: '/firmwares', visible: true, subpages: null },
			{ name: 'Заказчики', icon:`/icons/pages/customers.svg` , href: '/customers',visible: true,subpages: null,},
			{ name: 'Персонал', icon:`/icons/pages/employees.svg` ,  href: '/employees', visible: true, subpages: null },
			{ name: 'Базовые спецификации', icon:`/icons/pages/config.svg` , href: '/config',visible: true,subpages: null,},
			{ name: 'Трансфер', icon:`/icons/pages/move_item.svg` ,  href: '/move_item', visible: true, subpages: null },
		]

		commit('addPages', content)
	}
}


export const mutations = {
	addPages(state, content){
		state.pages = content
		// state.pages.forEach(item => {
		// 	if (item.subpages === null){
		// 		item.icon = `/icons/pages${item.href}.svg`.toString()
		// 	}
		// 	else {
		// 		const subpagesArrayTEMP = []
		// 		item.subpages.forEach(item => {
		// 			const obgOfSubpages = {}
		//
		// 			obgOfSubpages.name = item.name
		// 			obgOfSubpages.href = item.href
		// 			obgOfSubpages.visible = item.visible
		// 			obgOfSubpages.subpages = item.subpages
		// 			obgOfSubpages.description = item.description
		// 			obgOfSubpages.last = item.last
		//
		//
		//
		// 			obgOfSubpages.icon = `/icons/pages${item.href}.svg`.toString()
		//
		// 			subpagesArrayTEMP.push(obgOfSubpages)
		//
		// 			return subpagesArrayTEMP
		// 		})
		// 		this.subpages=subpagesArrayTEMP
		// 	}
		// })
	}
}

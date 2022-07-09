export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: '[NEW] Service Looch',
		htmlAttrs: {
			lang: 'ru'
		},
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: ''},
			{name: 'format-detection', content: 'telephone=no'},
		],
		link: [{
			rel: 'icon',
			href: 'logo.svg'
		}],

		script: [
			{
				src: '/js/popper.js/popper.min.js',
				type: 'text/javascript',
				defer: true
			},
			{
				src: '/js/bootstrap.min.js',
				type: 'text/javascript',
				defer: true
			},
			{
				src: '/js/jquery/index.js',
				type: 'text/javascript',
				defer: true
			},
			{
				src: '/js/datatables/index.js',
				type: 'text/javascript',
				defer: true
			},
			{
				src: '/js/datatables.bootstrap5/index.js',
				type: 'text/javascript',
				defer: true
			},
			{
				src: '/js/fonticon/index.js',
				type: 'text/javascript',
				defer: true
			},
		],
	},

	ssr: false,


	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/static/css/bootstrap.min.css',
		'~/static/css/datatables/rowReorder.css',
		'~/static/css/datatables/datatables.bootstrap.scss',
		"~/components/vue-multiselect/dist/vue-multiselect.min.css",
		'quill/dist/quill.snow.css',
		'quill/dist/quill.bubble.css',
		'quill/dist/quill.core.css'


	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: "~plugins/vue-quill-editor.js", ssr: false },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	loading: {
		color: 'white',
		height: '5px'
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		// 'bootstrap-vue/nuxt',
		'@nuxtjs/style-resources'
	],

	styleResources: {
		scss: ['./static/assets/scss/*.scss']
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}


}



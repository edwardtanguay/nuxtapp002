export default defineNuxtConfig({
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},
	css: ["~/assets/css/main.scss"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	app: {
		layoutTransition: { name: "layout", mode: "out-in" },
	},
	modules: ["nuxt-icon", "@pinia/nuxt"],
});

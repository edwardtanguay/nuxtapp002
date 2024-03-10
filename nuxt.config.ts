export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/css/main.scss"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});

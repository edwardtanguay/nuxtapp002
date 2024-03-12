export default defineNitroPlugin(nitroApp => {
	nitroApp.hooks.hook('render:html', (html, { event }) => {
		html.bodyPrepend.push('<h1>This is from Nitro');
	})
})
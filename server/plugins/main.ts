export default defineNitroPlugin(nitroApp => {
	nitroApp.hooks.hook('render:html', (html, { event }) => {
		html.bodyAppend.push('<h1>This is from Nitro');
	})
})
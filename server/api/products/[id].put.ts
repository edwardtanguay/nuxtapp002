export default defineEventHandler((event) => {
	const data = getRouterParams(event);
	return `You want to PUT item ${data.id}.`
});

export default defineEventHandler((event) => {
	const data = getRouterParams(event);
	return `You want to PATCH item ${data.id}.`
});

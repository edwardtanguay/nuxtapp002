export default defineEventHandler((event) => {
	const data = getRouterParams(event);
	return `You would like to DELETE item where ID=${data.id}.`
});

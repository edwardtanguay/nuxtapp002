export default defineEventHandler((event) => {
	const data = getRouterParams(event);
	return `You would like to see item where ID=${data.id}.`
});

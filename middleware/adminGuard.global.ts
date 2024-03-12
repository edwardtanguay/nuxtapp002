const loggedIn = true;

export default defineNuxtRouteMiddleware((to, from) => {
	console.log(`page routed from ${from.path} to ${to.path}`);
	if (to.path === "/pinia" && !loggedIn) {
		console.log('USER NOT PERMITTED ON THIS PAGE');
		return navigateTo("/");
	}
});

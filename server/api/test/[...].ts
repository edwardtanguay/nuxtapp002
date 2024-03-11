const router = createRouter();

router.get(
	"/products",
	defineEventHandler((event) => {
		return "return all products";
	})
);

router.post(
	"/products",
	defineEventHandler((event) => {
		return "create product";
	})
);

router.delete(
	"/products/:id",
	defineEventHandler((event) => {
		const data = getRouterParams(event);
		return `delete product ${data.id}`;
	})
);

export default useBase('/api/test', router.handler);

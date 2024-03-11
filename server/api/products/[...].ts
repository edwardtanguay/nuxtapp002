const router = createRouter();

router.get(
	"/main",
	defineEventHandler((event) => {
		return "return all products";
	})
);

router.post(
	"/main",
	defineEventHandler((event) => {
		return "create product";
	})
);

export default useBase('/api/products', router.handler);

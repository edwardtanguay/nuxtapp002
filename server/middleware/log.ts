import { uppercaseAndParenthesize } from "../utils/main";

export default defineEventHandler((event) => {
	console.log(`${new Date().toISOString()}: route accessed`);

	if (getRequestURL(event).pathname.includes("/api/products")) {
		console.log(`${new Date().toISOString()}: product route accessed`);
		console.log(uppercaseAndParenthesize('this is the util test'));
		setHeader(event, 'authorization', 'product-auth-test');
	}
});



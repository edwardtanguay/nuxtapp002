type Product = {
	id: number;
	title: string;
}

export default defineEventHandler(async (event) => {
	const product:Product = await readBody(event);
	console.log('product: ', product);
	console.log('product info:', `${product.title} (${product.id})`);
	return `${product.title} (${product.id})`;
});




export default defineEventHandler((event) => {
	// const query = getQuery(event);
	// console.log("query", query);
	return [
		{
			id: 1,
			title: "Smartphone",
			description:
				"A high-performance smartphone with advanced features.",
			price: 599.99,
		},
		{
			id: 2,
			title: "Laptop",
			description: "A powerful laptop for work and entertainment.",
			price: 1099.99,
		},
		{
			id: 3,
			title: "Headphones",
			description:
				"Premium noise-canceling headphones for immersive audio experience.",
			price: 249.99,
		},
		{
			id: 4,
			title: "Smartwatch",
			description:
				"An elegant smartwatch with health and fitness tracking features.",
			price: 199.99,
		},
	];
});

<script setup>
const { data: products } = await useFetch("/api/products");
// console.log("number of products", products.length); // undefined
console.log("products", products);
</script>

<template>
	<p v-if="products">There are {{ products.length }} products.</p>
</template>

<style scoped></style>

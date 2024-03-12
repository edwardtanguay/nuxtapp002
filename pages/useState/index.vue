<script setup lang="ts">
const counter = useState("counter", () => 0);
</script>

<template>
	<p class="mb-3">counter = {{ counter }}</p>
	<div class="flex gap-1">
		<button @click="counter--" class="w-[2rem]">-</button>
		<button @click="counter++" class="w-[2rem]">+</button>
	</div>
</template>

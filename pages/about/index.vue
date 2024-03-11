<script setup lang="ts">
import type { Noun } from '~/types';

const {
	data: nouns,
} = useFetch<Noun[]>("https://edwardtanguay.vercel.app/share/germanNouns.json", {
	lazy: false,
});

console.log("nouns", nouns);
</script>

<template>
	<p>This is the about page.</p>
	<p v-if="nouns">There are {{ nouns.length }} nouns.</p>
</template>

<style scoped></style>

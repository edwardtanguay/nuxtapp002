<script setup lang="ts">
import { upperCaseIt } from '~/tools';
import type { Noun } from '~/types';

const {
	data: nouns,
} = useFetch<Noun[]>("https://edwardtanguay.vercel.app/share/germanNouns.json", {
	lazy: false,
});

</script>

<template>
	<p>This is the about page.</p>
	<p v-if="nouns">There are {{ nouns.length }} nouns.</p>
	<p>This is a test of {{ upperCaseIt('tools') }}.</p>
</template>

<style scoped></style>

<script setup lang="ts">
interface Props {
	title: string;
}

const { title } = defineProps<Props>();
</script>

<template>
	<span>(SKILL: {{ title }}) </span>
</template>

<style scoped></style>

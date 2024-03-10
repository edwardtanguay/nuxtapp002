<script setup lang="ts">
import _skills from "~/data/skills.json";
const skills = ref(_skills);
</script>

<template>
	<p>There are {{ skills.length }} skills.</p>
</template>

<style scoped></style>

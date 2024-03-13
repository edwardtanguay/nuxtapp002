<script setup lang="ts">
const message = ref("");

message.value =
	"This site is a application to try out, experiment with and showcase Nuxt features as I learn the framework.";
</script>
<template>
	<p>{{ message }}</p>
</template>

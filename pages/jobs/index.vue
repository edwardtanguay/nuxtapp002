<script setup lang="ts">
import { appStore } from "~/stores/AppStore";
</script>

<template>
	<h2 class="mb-2 text-2xl text-blue-950">{{ appStore.jobs.length }} Jobs</h2>
	<ul>
		<li v-for="job in appStore.jobs">
			<span class="font-semibold">{{ job.title }}</span> - {{ job.company }}
		</li>
	</ul>
</template>

<style scoped></style>

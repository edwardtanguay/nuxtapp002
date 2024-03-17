<script setup lang="ts">
import { appStore } from "~/stores/AppStore";
</script>

<template>
	<div v-if="appStore.frontendJobs.length === 0">Loading...</div>
	<div v-if="appStore.frontendJobs.length > 0">
		<h2 class="mb-2 text-2xl text-blue-950">
			{{ appStore.frontendJobs.length }} Jobs
		</h2>
		<ul>
			<li v-for="frontendJob in appStore.frontendJobs">
				<span class="font-semibold">{{ frontendJob.title }}</span> -
				{{ frontendJob.company }}
			</li>
		</ul>
	</div>
</template>

<style scoped></style>

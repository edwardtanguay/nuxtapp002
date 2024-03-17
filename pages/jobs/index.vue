<script setup lang="ts">
import { appStore } from "~/stores/AppStore";
</script>

<template>
	<div v-if="appStore.skills.length === 0">Loading...</div>
	<div v-if="appStore.skills.length > 0">
		<h2 class="mb-2 text-2xl text-blue-950">
			{{ appStore.jobs.length }} Jobs
		</h2>
		<ul>
			<li v-for="job in appStore.jobs">
				<span class="font-semibold">{{ job.title }}</span> -
				{{ job.company }}
			</li>
		</ul>
	</div>
</template>

<style scoped></style>

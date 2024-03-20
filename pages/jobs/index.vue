<script setup lang="ts">
import { appStore } from "~/stores/AppStore";
</script>

<template>
	<div v-if="appStore.frontendJobs.length === 0">Loading...</div>
	<div v-if="appStore.frontendJobs.length > 0">
		<h2 class="mb-2 text-2xl text-blue-950">
			{{ appStore.frontendJobs.length }} Jobs
		</h2>
		<div>
			<div
				v-for="frontendJob in appStore.frontendJobs"
				class="mb-3 w-[40rem]"
			>
				<div class="bg-slate-400 py-2 px-3 rounded-t-lg flex justify-between">
					<div class="font-semibold">{{ frontendJob.title }}</div>
					<div class="text-slate-700">{{ frontendJob.publicationDate }}</div>
				</div>
				<div class="bg-slate-300 pb-2 pt-1 px-3 rounded-b-lg">
					<div class="font-semibold italic">{{ frontendJob.company }}</div>
					<div>{{ frontendJob.skillList }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

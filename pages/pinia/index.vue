<script setup lang="ts">
import { appStore } from "~/stores/AppStore";
</script>

<template>
	<p class="mb-3">
		This page demonstrates how use data from the
		<span class="font-bold">Pinia store</span>.
	</p>
	<h2 class="mb-2 text-2xl text-blue-950">Skills</h2>
	<ClientOnly>
		<ul class="list-disc ml-6">
			<li v-for="skill in appStore.skills" :key="skill.idCode">
				<span class="font-semibold">{{skill.name}}</span> -
				{{ skill.description }}
			</li>
		</ul>
		<h2 class="mb-2 text-2xl text-blue-950 mt-6">Notes</h2>
		<ul class="list-disc ml-6">
			<li v-for="note in appStore.notes" :key="note">{{ note }}</li>
		</ul>
	</ClientOnly>
</template>

<style scoped></style>

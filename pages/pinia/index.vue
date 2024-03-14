<script setup lang="ts">
import { appStore } from "~/stores/AppStore";
</script>

<template>
	<p class="mb-3">
		This page demonstrates how to use data from the
		<span class="font-bold">Pinia store</span>.
	</p>
	<ClientOnly>
		<h2 class="mb-2 text-2xl text-blue-950">
			{{ appStore.numberOfNotes }} Notes
		</h2>
		<ul class="list-disc ml-6">
			<li v-for="note in appStore.notes" :key="note">{{ note }}</li>
		</ul>
		<h2
			v-if="appStore.skills.length === 0"
			class="mb-2 text-2xl text-blue-950 mt-4"
		>
			<Icon name="svg-spinners:clock" class="text-3xl" /> Loading
			skills...
		</h2>
		<div v-if="appStore.skills.length !== 0">
			<h2 class="mb-2 text-2xl text-blue-950 mt-4">
				{{ appStore.numberOfSkills }} Skills
			</h2>
			<li
				v-for="skill in appStore.skills"
				:key="skill.idCode"
				class="flex gap-2 mb-2"
			>
				<button @click="appStore.deleteSkill(skill)">delete</button>
				<span class="font-semibold">{{ skill.name }}</span>
				<div>{{ skill.description }}</div>
				<div>IMPORTANCE: [{{ skill.importance }}]</div>
			</li>
		</div>
	</ClientOnly>
</template>
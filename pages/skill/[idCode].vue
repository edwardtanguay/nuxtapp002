<script setup>
import { appStore } from "~/stores/AppStore";

definePageMeta({
	validate: async (route) => {
		const { idCode } = route.params;
		return /^.{3,11}$/.test(idCode);
	},
});

const route = useRoute();
const { idCode } = route.params;
const skill = appStore.skills.find((m) => m.idCode === idCode);
</script>

<template>
	<Head>
		<Title>{{ skill.name }}</Title>
		<Meta name="description" :content="skill.name" />
	</Head>
	<p>
		<div class="font-bold text-2xl">{{ skill.name }}</div>
		<div class="italic text-xl"> {{ skill.description }} </div>
	</p>
</template>

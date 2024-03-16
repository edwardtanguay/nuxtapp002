<script setup lang="ts">
import { upperCaseIt } from "~/tools";
import type { Area, Noun } from "~/types";
import { appStore } from "~/stores/AppStore";

const { data: nouns } = useFetch<Noun[]>(
	"https://edwardtanguay.vercel.app/share/germanNouns.json",
	{
		lazy: false,
	}
);

const areaToShow = ref<Area>("firstArea");

const newAppMessage = ref("");

const handleAppMessageform = () => {
	// appStore.setAppMessage(newAppMessage.value); // also works
	appStore.appMessage = newAppMessage.value;
};

// const appName = useState("appName");

const randomLimit = ref(4);
const randomNumber = ref(Math.floor(Math.random() * randomLimit.value) + 1);
</script>

<template>
	<main class="grid grid-cols-3 gap-4">
		<section class="bg-slate-400 col-span-1 p-6 rounded">
			<p>wait 1000</p>
			<p>This is the about page.</p>
			<p v-if="nouns">There are {{ nouns.length }} nouns.</p>
			<p>This is a test of {{ upperCaseIt("tools") }}.</p>
			<!-- <p>appName: {{ appName }}</p> -->
			<p class="mt-4">appMessage: {{ appStore.appMessage }}</p>
			<button
				@click="appStore.appMessage = '(appMessage was changed)'"
				class="mt-4"
			>
				change appMessage
			</button>
			<h2 class="text-2xl mt-4">Areas</h2>
			<div class="flex gap-1">
				<button @click="areaToShow = 'firstArea'">First</button>
				<button @click="areaToShow = 'secondArea'">Second</button>
				<div v-if="areaToShow === 'firstArea'">
					This is the first area.
				</div>
				<div v-if="areaToShow === 'secondArea'">
					This is the second area.
				</div>
			</div>
			<h2 class="text-2xl mt-4">
				Random number between 1 and {{ randomLimit }}
			</h2>
			<p>{{ randomNumber }}</p>
		</section>
		<section>
			<form @submit.prevent="handleAppMessageform" class="flex gap-2">
				<input placeholder="new app message" v-model="newAppMessage" />
				<button class="text-xs">Submit</button>
			</form>
		</section>
	</main>
</template>

<style scoped></style>

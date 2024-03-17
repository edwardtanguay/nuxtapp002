<script setup lang="ts">
const message = ref("");
import { appStore } from "~/stores/AppStore";

// const appName = useState("appName", () => "Nuxt Learning Showcase 2.0");
// console.log("appName", appName);

message.value =
	"This site is a application to try out, experiment with and showcase Nuxt features as I learn the framework.";
</script>
<template>
	<NuxtLayout>
		<!-- <p>appName: {{ appName }}</p> -->
		<p>{{ message }}</p>
		<DevOnly>
			<div class="bg-gray-400 p-6 w-fit mt-6 rounded font-bold">
				This is developer information inside the DevOnly element. It
				won't be shown in production.
			</div>
		</DevOnly>
		<p class="mt-4">appMessage: {{ appStore.appMessage }}</p>
	</NuxtLayout>
</template>

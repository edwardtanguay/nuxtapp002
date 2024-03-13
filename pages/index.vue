<script setup lang="ts">
const message = ref("");

message.value =
	"This site is a application to try out, experiment with and showcase Nuxt features as I learn the framework.";
</script>
<template>
	<NuxtLayout>
		<p>{{ message }}</p>
		<DevOnly>
			<div class="bg-red-500 p-6 w-fit mt-6 rounded font-bold">
				This is developer information inside the DevOnly element. It
				won't be shown in production.
			</div>
		</DevOnly>
	</NuxtLayout>
</template>

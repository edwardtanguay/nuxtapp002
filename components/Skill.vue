<script setup lang="ts">
import type { Skill } from "~/types";

interface Props {
	skill: Skill;
}

const emits = defineEmits<{
	(e: "show-info", message: string): void;
}>();

const showInfo = () => {
	console.log("emitted event");
	emits("show-info", "hello");
};

const { skill } = defineProps<Props>();
</script>

<template>
	<span
		><a target="_blank" :href="skill.url" class="underline">{{
			skill.name
		}}</a>
		[<span @click="showInfo" class="cursor-pointer hover:underline">show message</span>]
		{{ " " }}
	</span>
</template>

<style scoped></style>

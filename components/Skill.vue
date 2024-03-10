<script setup lang="ts">
import type { Skill } from "~/types";

interface Props {
	skill: Skill;
}

const { skill } = defineProps<Props>();
</script>

<template>
	<span
		><a target="_blank" :href="skill.url" class="underline">{{
			skill.name
		}}</a
		> 
	</span>
</template>

<style scoped></style>

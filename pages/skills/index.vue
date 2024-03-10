<script setup lang="ts">
import _skills from "~/data/skills.json";
import type { ISkill } from "~/interfaces";

const skills = ref<ISkill[]>(_skills);

const foundSkills = computed((): ISkill[] => {
	const _foundSkills = skills.value.filter((m) =>
		m.description.includes("React")
	);
	if (_foundSkills) {
		return _foundSkills;
	} else {
		return [] as ISkill[];
	}
});

</script>

<template>
	<div class="mb-5">
		<h2 class="text-xl mb-3">There are {{ skills.length }} skills.</h2>
		<div>
			<span v-for="skill in skills">({{ skill.name }}) </span>
		</div>
	</div>
	<div class="mb-5">
		<h2 class="text-xl mb-3">There are {{ foundSkills.length }} skills.</h2>
		<div>
			<span v-for="foundSkill in foundSkills"
				>({{ foundSkill.name }})
			</span>
		</div>
	</div>
</template>

<style scoped></style>

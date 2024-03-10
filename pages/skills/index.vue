<script setup lang="ts">
import _skills from "~/data/skills.json";
import type { Skill } from "~/types";

const skills = ref<Skill[]>(_skills);
const newFoundSkills = ref<Skill[]>([]);

const foundSkills = computed((): Skill[] => {
	const _foundSkills = skills.value.filter((m) =>
		m.description.includes("React")
	);
	if (_foundSkills) {
		return _foundSkills;
	} else {
		return [] as Skill[];
	}
});

const findSkills = (_skills: Skill[], searchTerm: string) => {
	return _skills.filter((m) => m.description.includes(searchTerm));
};

// doesn't work
// onMounted(() => {
// 	const route = useRoute();
// 	const searchTerm = String(route.query.search);
// 	console.log("searchTerm", searchTerm);
// 	const _newFoundSkills = findSkills(skills.value, searchTerm);
// 	console.log("_newFoundSkills", _newFoundSkills);
// 	const newFoundSkills = ref(_newFoundSkills);
// });
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
	<div class="mb-5">
		<h2 class="text-xl mb-3">
			There are {{ newFoundSkills.length }} skills.
		</h2>
	</div>
</template>

<style scoped></style>~/types

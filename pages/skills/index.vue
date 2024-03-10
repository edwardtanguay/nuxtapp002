<script setup lang="ts">
import _skills from "~/data/skills.json";
import type { ISkill } from "~/interfaces";

const skills = ref<ISkill[]>(_skills);
const newFoundSkills = ref<ISkill[]>([]);

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

const findSkills = (_skills: ISkill[], searchTerm: string) => {
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

<style scoped></style>

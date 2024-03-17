<script setup lang="ts">
import _rawSkills from "~/data/skills.json";
import type { Skill } from "~/types";

// doesn't work:

// useSeoMeta({
// 	title: "Skills",
// 	ogTitle: "Skills Page",
// 	description: "This is the skills page.",
// 	ogDescription: "This is the skills page.",
// 	ogImage: "https://tanguay-eu.vercel.app/images/outline/havethiserro.png",
// });

definePageMeta({
	layout: "skills",
});

const _skills: Skill[] = [];
for (const _rawSkill of _rawSkills) {
	const _skill: Skill = {
		idCode: _rawSkill.idCode,
		name: _rawSkill.name,
		url: _rawSkill.url,
		description: _rawSkill.description,
		rank: 3
	};
	_skills.push(_skill);
}

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

// const findSkills = (_skills: Skill[], searchTerm: string) => {
// 	return _skills.filter((m) => m.description.includes(searchTerm));
// };

// doesn't work
// onMounted(() => {
// 	const route = useRoute();
// 	const searchTerm = String(route.query.search);
// 	console.log("searchTerm", searchTerm);
// 	const _newFoundSkills = findSkills(skills.value, searchTerm);
// 	console.log("_newFoundSkills", _newFoundSkills);
// 	const newFoundSkills = ref(_newFoundSkills);
// });

const handleInfoShowing = () => {
	console.log("responding to emit");
};

const elemSkill1Name = ref<HTMLInputElement | null>(null);

onMounted(() => {
	if (elemSkill1Name.value) {
		elemSkill1Name.value.focus();
	}
});

const handleUpdateSecondSkill = (skill: Skill, event: InputEvent) => {
	if (event.data === " ") {
		skill.name = (event.target as HTMLInputElement).value;
	}
};

const handleGoToSkill = (skill: Skill) => {
	console.log(`going to ${skill.name}`);
	navigateTo(`/skill/${skill.idCode}`);
};

const title = "Skills";
const description = "This is the skills page.";
</script>

<template>
	<Head>
		<Title>{{ title }}</Title>
		<Meta name="description" :content="description" />
		<meta
			name="image"
			content="https://tanguay-eu.vercel.app/images/siteIcon.png"
		/>
	</Head>
	<NuxtLayout>
		<div class="mb-5">
			<h2 class="text-xl mb-3">There are {{ skills.length }} skills.</h2>

			<h2 class="text-xl mb-3">Links to individual skill pages</h2>
			<div class="mb-6">
				<span v-for="skill in skills"
					>(<span
						@click="handleGoToSkill(skill)"
						class="hover:underline cursor-pointer"
						>{{ skill.name }}</span
					>)
				</span>
			</div>
			<div>
				<p class="mb-3">
					First skill:
					<input
						v-model="skills[0].name"
						ref="elemSkill1Name"
						type="text"
					/>
					(Test v-model and focus)
				</p>
				<p class="mb-3">
					Second skill:
					<input
						:value="skills[1].name"
						@input="(e) => handleUpdateSecondSkill(skills[1], e as InputEvent)"
						ref="elemSkill2Name"
						type="text"
					/>
					(Test v-model and focus)
				</p>
			</div>
			<div>
				<span v-for="skill in skills"
					><Skill @show-info="handleInfoShowing" :skill="skill"
				/></span>
			</div>
		</div>
		<div class="mb-5">
			<h2 class="text-xl mb-3">
				There are {{ foundSkills.length }} skills.
			</h2>
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
	</NuxtLayout>
</template>

<style scoped></style>
~/types

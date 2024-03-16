import { SkillSchema, type Skill } from "~/types";
import * as tools from "~/tools";

export const getSkills = async () => {
	return new Promise<Skill[]>((resolve, reject) => {
		try {
			const url = "https://edwardtanguay.vercel.app/share/skills.json";
			setTimeout(async () => {
				// useFetch
				// const { data: rawSkillsObj } = await useFetch(url);
				// const rawSkills = toRaw(rawSkillsObj.value) as any[];

				// useAsyncData
				// const { data } = await useAsyncData('rawSkills', async () => {
				// 	const [data] = await Promise.all([
				// 		$fetch(url)
				// 	])
				// 	return { data }
				// });
				// const rawSkills = ((toRaw(data.value)) as unknown as any[]).data;
				// console.log('data', data);

				// axios
				// const response = await axios.get(url);
				// const rawSkills = response.data;

				// $fetch
				const rawSkills: any[] = await $fetch(url);

				const skills: Skill[] = [];
				for (const rawSkill of rawSkills) {
					const skill: Skill = {
						idCode: rawSkill.idCode,
						name: rawSkill.name,
						url: rawSkill.url,
						description: rawSkill.description,
						rank: tools.getRandomNumber(0, 10),
					};
					const parseResult = SkillSchema.safeParse(skill);
					if (parseResult.success) {
						skills.push(skill);
					} else {
						if (skill.rank > 5) {
							skill.rank = 5;
							skills.push(skill);
						} else {
							// console.log(`BAD SKILL: ${JSON.stringify(skill)}`);
						}
					}
				}
				resolve(skills);
			}, 3000);
		} catch (e) {
			reject(e);
		}
	});
};

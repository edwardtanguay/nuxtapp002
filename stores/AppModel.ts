import { SkillSchema, type Skill } from "~/types";
import * as tools from "~/tools";
import axios from 'axios';

export const getSkills = async () => {
	return new Promise<Skill[]>((resolve, reject) => {
		try {
			const url = "https://edwardtanguay.vercel.app/share/skills.json";
			(async () => {
				// const { data: rawSkillsObj } = await useFetch(url);
				// const rawSkills = toRaw(rawSkillsObj.value) as any[];
				const response = await axios.get(url);
				const rawSkills = response.data;

				console.log('rawSkills', rawSkills);
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
							console.log(`BAD SKILL: ${JSON.stringify(skill)}`);
						}
					}
				}
				resolve(skills);
			})();
		} catch (e) {
			reject(e);
		}
	});
};
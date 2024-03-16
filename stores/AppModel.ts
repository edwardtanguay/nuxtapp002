import { SkillSchema, type Skill, type Job } from "~/types";
import * as tools from "~/tools";

export const getJobs = async () => {
	return new Promise<Job[]>((resolve, reject) => {
		(async () => {
			try {
				const url = "http://localhost:4011/api/jobs";
				const jobs: any[] = await $fetch(url);
				resolve(jobs);
			} catch (e) {
				reject(e);
			}
		})();
	});
};

export const getSkills = async () => {
	return new Promise<Skill[]>((resolve, reject) => {
		try {
			const url = "https://edwardtanguay.vercel.app/share/skills.json";
			setTimeout(async () => {
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

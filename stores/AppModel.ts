import axios from "axios";
import type { Skill } from "~/types";

export const getSkills = async () => {
	return new Promise<Skill[]>((resolve, reject) => {
		try {
			setTimeout(async () => {
				const rawSkills = (
					await axios.get(
						"https://edwardtanguay.vercel.app/share/skills.json"
					)
				).data;
				const skills: Skill[] = [];
				for (const rawSkill of rawSkills) {
					const _skill: Skill = {
						idCode: rawSkill.idCode,
						name: rawSkill.name,
						url: rawSkill.url,
						description: rawSkill.description,
						importance: "somewhatUseful",
					};
					skills.push(_skill);
				}
				resolve(skills);
			}, 3000);
		} catch (e) {
			reject(e);
		}
	});
};

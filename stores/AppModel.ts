import {
	SkillSchema,
	type FrontendJob,
	type Job,
	type Skill,
	JobSchema,
} from "~/types";
import * as tools from "~/tools";

const buildJobsFromRawJobs = (rawJobs: any[]): Job[] => {
	const jobs: Job[] = [];
	for (const rawJob of rawJobs) {
		const job: Job = {
			id: rawJob.id,
			title: rawJob.title,
			company: rawJob.company,
			url: rawJob.url,
			description: rawJob.description,
			skillList: rawJob.skillList,
			publicationDate: rawJob.publicationDate,
		};
		const parseResult = JobSchema.safeParse(job);
		if (parseResult.success) {
			jobs.push(job);
		} else {
			tools.devLog(`REJECTED JOB: ${JSON.stringify(job)}`);
		}
	}
	return jobs;
};

const buildFrontendJobsFromJobs = (jobs: Job[]): FrontendJob[] => {
	const frontendJobs: FrontendJob[] = [];
	for (const job of jobs) {
		const frontendJob: FrontendJob = {
			...job,
			isOpen: false,
			isProcessing: false,
			userIsDeleting: false,
		};
		frontendJobs.push(frontendJob);
	}
	return frontendJobs;
};

export const getFrontendJobs = async () => {
	return new Promise<FrontendJob[]>((resolve, reject) => {
		(async () => {
			try {
				const url = "http://localhost:4011/api/jobs";
				const rawJobs: any[] = await $fetch(url);
				const jobs = buildJobsFromRawJobs(rawJobs);
				const frontendJobs = buildFrontendJobsFromJobs(jobs);
				tools.devLog(`there are ${frontendJobs.length} jobs`)
				resolve(frontendJobs);
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
			}, 0);
		} catch (e) {
			reject(e);
		}
	});
};

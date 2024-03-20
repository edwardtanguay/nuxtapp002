import axios from "axios";
import {
	SkillSchema,
	type FrontendJob,
	type Job,
	type Skill,
	JobSchema,
} from "~/types";
import * as tools from "../tools";

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
				const rawJobs: any[] = await $fetch("/api/jobs");
				const jobs = buildJobsFromRawJobs(rawJobs);
				const frontendJobs = buildFrontendJobsFromJobs(jobs);
				tools.devLog(`there are ${frontendJobs.length} jobs`);
				resolve(frontendJobs);
			} catch (e) {
				reject(e);
			}
		})();
	});
};

export const deleteJob = (frontendJob: FrontendJob) => {
	return new Promise<Job>((resolve, reject) => {
		(async () => {
			try {
				setTimeout(async () => {
					const response = await axios.delete(
						`/api/jobs/${frontendJob.id}`
					);
					if (response.status === 200) {
						const job: Job = response.data;
						resolve(job);
					} else {
						reject(
							`Job with ID ${frontendJob.id} could not be deleted. Please contact administrator of site.`
						);
					}
				}, 2000);
			} catch (e) {
				console.log(`DELETE JOB ERROR`, {
					error: e,
					frontendJob,
				});
				reject(
					`Job with ID ${frontendJob.id} could not be deleted. Please contact administrator of site.`
				);
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

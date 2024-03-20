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
				const url = "/api/jobs";
				const rawJobs: any[] = await $fetch(url);
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
				if (true) {
					const job = {
						id: 3,
						title: "Web Frontend Entwickler",
						company: "EPI development",
						url: "https://www.get-in-it.de/jobsuche/p132078?filter[thematic_priority]=5&filter[city][radius]=25&filter[city][city][0][lon]=13.41053&filter[city][city][0][lat]=52.52437&start=0&limit=39&ref=Jobsuche",
						description:
							"Die Herausforderung\n\n    Erstellung einer Bedarfsanalyse für neue Funktionen mit einer selbsterklärenden UI Gestaltung\n    Entwickeln von Funktionen und Algorithmen die nachhaltig lesbar sind\n    Der Fokus liegt in der Vereinfachung komplexer Vorgänge\n\nDeine Aufgaben\n\n    Weiterentwicklung von epirent aufgrund von aktuellen Anforderungen\n    Im Team Lösungen für neue Funktionen erarbeiten\n    Erstellen von gut bedienbaren und ausgeklügelten UI, denke wie ein Anwender\n    Kommunikation im Team, einbringen eigener Ideen\n    Offener Umgang mit neuen Technologien\n    Kreativität ist gefragt\n\nDeine Fähigkeiten\n\n    Weitreichende Erfahrungen in der Anwendungsprogrammierung\n    Klare und selbsterklärende UI Designs erstellen\n    Komplizierte technische Zusammenhänge auf einfache Funktionen herunterbrechen\n    Kommunikativ im Team, zielorientiert und selbständig in der Arbeitsorganisation\n    Deine Sprachkenntnisse (optimal): JavaScript, CSS, HTML, Bootstrap, AngularJS, API Entwicklung (REST), Responsive Design / Progressive Apps\n    Kein Hochschulabschluss notwendig, Können zählt!",
						skillList: "angular, bootstrap, rest, responsive, pwa",
						publicationDate: "2022-11-17",
					};
					setTimeout(() => {
						resolve(job);
					}, 2000);
				} else {
					setTimeout(() => {
						reject("Job could not be deleted. Please contact administrator of site.");
					}, 2000);
				}
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

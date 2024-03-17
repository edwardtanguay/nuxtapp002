import { z } from "zod";

export const SkillSchema = z.object({
	idCode: z.string(),
	name: z.string(),
	url: z.string(),
	description: z.string(),
	rank: z.number().min(1).max(5),
});

export type Skill = z.infer<typeof SkillSchema>;

export type AppStore = {
	skills: Skill[];
	notes: string[];
	appMessage: string;
	frontendJobs: FrontendJob[];
};

export type Noun = {
	article: string;
	singular: string;
	plural: string;
};

export type Area = "firstArea" | "secondArea";

// JOB
export const NewJobSchema = z.object({
	title: z.string(),
	company: z.string(),
	url: z.string(),
	description: z.string(),
	skillList: z.string(),
	publicationDate: z.string(),
});
export type NewJob = z.infer<typeof NewJobSchema>;

export const JobSchema = z.object({
	id: z.number(),
	title: z.string(),
	company: z.string(),
	url: z.string().regex(/^https?:\/\/(?:www\.)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?$/),
	description: z.string(),
	skillList: z.string(),
	publicationDate: z.string(),
});
export type Job = z.infer<typeof JobSchema>;

export const FrontendJobSchema = z.object({
	id: z.number(),
	title: z.string(),
	company: z.string(),
	url: z.string().url(),
	description: z.string(),
	skillList: z.string(),
	publicationDate: z.string(),
	isOpen: z.boolean(),
	userIsDeleting: z.boolean(),
	isProcessing: z.boolean(),
});
export type FrontendJob = z.infer<typeof FrontendJobSchema>;

export type Database = {
	jobs: Job[];
};

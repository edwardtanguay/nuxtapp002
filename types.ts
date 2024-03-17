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
	jobs: Job[];
};

export type Noun = {
	article: string;
	singular: string;
	plural: string;
};

export type Area = "firstArea" | "secondArea";

export type NewJob = {
	title: string;
	company: string;
	url: string;
	description: string;
	skillList: string;
	publicationDate: string;
};

export type Job = NewJob & {
	id: number;
};

export type FrontendJob = Job & {
	isOpen: false;
	userIsDeleting: false;
	isProcessing: false;
}

export type Database = {
	jobs: Job[];
};

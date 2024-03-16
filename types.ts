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
};

export type Noun = {
	article: string;
	singular: string;
	plural: string;
};

export type Area = "firstArea" | "secondArea";
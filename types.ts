import { z } from 'zod';

export const SkillSchema = z.object({
	idCode: z.string(),
	name: z.string(),
	url: z.string(),
	description: z.string(),
	rank: z.number(),

})

export type Skill = z.infer<typeof SkillSchema>;

export type AppStore = {
	skills: Skill[];
	notes: string[];
}
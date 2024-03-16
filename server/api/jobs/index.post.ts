import type {NewJob } from "~/types";

export default defineEventHandler(async (event) => {
	const newJob:NewJob = await readBody(event);
	return `adding: ${newJob.title}`;
});
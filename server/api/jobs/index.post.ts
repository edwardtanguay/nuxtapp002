import * as db from '../../dataSources/lowdb';
import type { NewJob } from "~/types";

export default defineEventHandler(async (event) => {
	const newJob: NewJob = await readBody(event);
	return db.createJob(newJob);
});

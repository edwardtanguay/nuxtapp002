import { join } from "path";
import { JSONFile } from "lowdb/node";
import { Low } from "lowdb";
import type { Database, Job, NewJob } from "../../types";
import * as lowdb from './lowdb';

const projectBasePath = process.cwd();
const dbPathAndFileName = join(projectBasePath, "data/db.json");
const adapter = new JSONFile<Database>(dbPathAndFileName);
const db: Low<Database> = new Low<Database>(adapter, {} as Database);

export const getNextId = async () => {
	const jobs = await lowdb.getAllJobs();
	const highestId = jobs.reduce((maxId, job) => {
		return job.id > maxId ? job.id : maxId;
	}, 0);
	return highestId + 1;
}

export const getAllJobs = async () => {
	await db.read();
	const jobs: Job[] = db.data.jobs;;
	return jobs;
};

export const deleteJob = async (id:number) => {
	await db.read();
	const deletedJob = db.data.jobs.find(m => m.id === id);
	if (deletedJob) {
		const indexToRemove = db.data.jobs.findIndex((job) => job.id === id);
		if (indexToRemove !== -1) {
			db.data.jobs.splice(indexToRemove, 1);
			await db.write();
		}
		return deletedJob;
	} else {
		return null;
	}
}

export const createJob = async (newJob: NewJob) => {
	await db.read();
	const job: Job = {
		...newJob,
		id: await lowdb.getNextId()
	}
	const jobs = db.data.jobs;
	jobs.push(job);
	await db.write();
	return job;
}
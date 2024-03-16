import { join } from "path";
import { JSONFile } from "lowdb/node";
import { Low } from "lowdb";
import type { Database } from "../../types";

const projectBasePath = process.cwd();
const dbPathAndFileName = join(projectBasePath, "data/db.json");
const adapter = new JSONFile<Database>(dbPathAndFileName);
const db: Low<Database> = new Low<Database>(adapter, {} as Database);

export const getAllJobs = async () => {
	await db.read();
	return db.data.jobs;
};

export const deleteJob = async (id:number) => {
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
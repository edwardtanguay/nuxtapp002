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

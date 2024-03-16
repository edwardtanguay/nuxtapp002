import { join } from 'path';
import { JSONFile } from 'lowdb/node';
import { Low } from 'lowdb';
import type { Database } from '../../types';

const projectBasePath = process.cwd();
const dbPathAndFileName = join(projectBasePath, 'data/db.json');
console.log(dbPathAndFileName);
const adapter = new JSONFile<Database>(dbPathAndFileName);
const db: Low<Database> = new Low<Database>(adapter, {} as Database);
await db.read();

export const getAllJobs = () => {
	return ['111']// db.data.jobs;
}
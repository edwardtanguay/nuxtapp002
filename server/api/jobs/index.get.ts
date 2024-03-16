import * as db from '../../dataSources/lowdb';

export default defineEventHandler((event) => {
	return db.getAllJobs();
});

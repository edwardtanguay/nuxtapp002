import * as lowdb from '../../dataSources/lowdb';

export default defineEventHandler((event) => {
	return lowdb.getAllJobs();
});

import * as db from '../../dataSources/lowdb';
export default defineEventHandler((event) => {
	const id = Number(getRouterParams(event).id);
	return db.deleteJob(id);
});
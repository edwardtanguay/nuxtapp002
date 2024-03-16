// import * as db from '../../dataSources/lowdb';
import {getAllJobs} from '../../dataSources/lowdb';

export default defineEventHandler((event) => {
	return getAllJobs();
});

import {getApi} from '@/Common/getApi'
import { getCourse } from '@/Common/getBack/getCourse';
import { getAssignment } from './Common/getBack/getAssignment';

getApi().then(async (res) => {
	const courses = await new getCourse(res).run();
	const assignment = await new getAssignment(res).run(courses.activities[0].course.id);
	console.log(assignment);
})
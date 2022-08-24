import {getApi} from '@/Common/getApi'
import { getCourse } from '@/Common/getBack/getCourse';
import { getAssignment } from './Common/getBack/getAssignment';
import { content_type, types } from './models/Assignement';

getApi().then(async (res) => {
	const courses = await new getCourse(res).run();
	const ids : number[] = [];
	courses.activities.forEach((item) => {
		ids.push(item.course.id);
	})
	const assignment = await new getAssignment(res).runAllActivities(ids);
	for(let item2 of assignment) {
		for(let item of item2) {
			if(item.completed == false && item.type == types.COMMONS && item.commons_content?.content_type == content_type.mp4)  {
				console.log(item.title);
			}
		}
	}
	console.log('end');
})
import {getApi} from '@/Common/getApi'
import { getCourse } from './Common/getCourse';

getApi().then((res) => {
	console.log(res);
	getCourse(res);
})
import fetch from "node-fetch"
import '@/Common/env'

export const getCourse = async (apiKey : string) => {
	const res = await fetch(`https://canvas.ssu.ac.kr/learningx/api/v1/users/${process.env.userid}/learn_activities?term_ids=12`,{
		headers : {
			Authorization: `Bearer ${apiKey}`
		}
	});
	console.log(await res.json());
}
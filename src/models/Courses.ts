export interface course {
	id: number,
	term_id: number,
	name: string,
	course_format: string,
	professors: string,
	total_students: number,
	is_observer: boolean
}
export interface activity {
	course: course,
	acitivities: any,
	todo_list: any,
}
export interface Courses {
	activities: activity[],
	total_unread_messages: number,
	total_count: number
}
export enum types {
	ASSIGNMENT = "assignment",
	COMMONS= "commons",
	DISCUSSION= "discussion",
	QUIZ= "quiz",
	EXAM= "exam",
	SMART_ATTENDANCE= "smart_attendance",
	OFFLINE_ATTENDANCE= "offline_attendance",
	TEXT= "text",
	EXTERNAL_VIDEO= "external_video",
	EXTERNAL_YOUTUBE= "external_youtube",
	VIDEO_CONFERENCE= "video_conference",
}

export enum content_type {
	pdf = "pdf",
	mp4 = "mp4",
}

export interface commons_content {
	content_id: string,
	content_type: content_type,
	file_name: string,
	progress_support: boolean,
	thumbnail_url: string,
	view_url: string,
}

export interface assignment {
	asignment_id : number,
	component_id: number,
	opened: boolean,
	title: string,
	description: string, 
	position: 17,
	commons_content : commons_content | null,
	type: types,
	due_at: string,
	unlock_at: string,
	late_at: string,
	lock_at: string,
	created_at: string,
	external_extra_vars: { canvas_content_id: number },
	points_possible: number,
	grading_type: string,
	submission_types: [ 'external_tool' ],
	omit_from_final_grade: boolean,
	muted: boolean,
	is_master_course_child_content: boolean,
	has_error_external_url: boolean,
	schedule_time: string,
	using_cloud_recording_import_into_cms: boolean,
	publishing_cloud_recording: boolean,
	zoom_info: any,
	submitted: boolean,
	grade: string | number,
	score: number,
	view_info: {
		view_url: string
	},
	integration_data: any,
	submitted_at: string,
	attachments: any,
	comments: [],
	use_attendance: boolean,
	completed: boolean,
	attendance_status: string
}
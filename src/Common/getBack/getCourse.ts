import fetch from "node-fetch"
import '@/env'
import { Courses } from "@/models/Courses";
import { Controller } from "./Controller";

export class getCourse extends Controller{

	constructor(apiKey : string) {
		super(apiKey);
	}

	public run = async () => {
		const res = await this.get(`users/${process.env.userid}/learn_activities?term_ids=12`);
		return res as Courses;	
	}
}
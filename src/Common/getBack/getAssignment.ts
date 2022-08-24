import { Controller } from "@/Common/getBack/Controller";
import { assignment } from "@/models/Assignement";
import { Courses } from "@/models/Courses";

export class getAssignment extends Controller{

	constructor(apiKey : string) {
		super(apiKey);
	}

	public run = async (id:number) => {
		const res = await this.get(`courses/${id}/allcomponents_db?&user_login=${process.env.userid}&role=1`);
		return res as assignment[];	
	}

	public runAllActivities = async (ids : number[]) => {
		const promise = ids.map(async (item) => {
			return await this.run(item);
		})
		return await Promise.all(promise);
	}
}
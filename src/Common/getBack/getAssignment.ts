import { Controller } from "@/Common/getBack/Controller";
import { Courses } from "@/models/Courses";

export class getAssignment extends Controller{

	constructor(apiKey : string) {
		super(apiKey);
	}

	public run = async (id:number) => {
		const res = await this.get(`courses/${id}/allcomponents_db?&user_login=${process.env.userid}&role=1`);
		return res;	
	}
}
import fetch from "node-fetch";

export class Controller {
	private source : string;
	protected apiKey : string;

	constructor(apiKey : string) {
		this.apiKey = apiKey;
		this.source = 'https://canvas.ssu.ac.kr/learningx/api/v1/'
	}

	protected get = async (src : string) => {
		return await (await fetch(this.source + src,{
			headers : {
				Authorization: `Bearer ${this.apiKey}`,
			}
		})).json();
	}
}
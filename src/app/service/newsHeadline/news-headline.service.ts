import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class NewsHeadlineService {
	constructor(private http: HttpClient) {}
	news: any;
	setNewsReadMore(news) {
		this.news = news;
	}
	getNews() {
		return this.news;
	}
}

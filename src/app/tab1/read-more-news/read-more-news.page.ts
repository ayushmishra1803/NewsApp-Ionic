import { Router } from "@angular/router";
import { NewsHeadlineService } from "./../../service/newsHeadline/news-headline.service";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-read-more-news",
	templateUrl: "./read-more-news.page.html",
	styleUrls: ["./read-more-news.page.scss"],
})
export class ReadMoreNewsPage implements OnInit {
	constructor(private News: NewsHeadlineService, private router: Router) {}

	news;
	ngOnInit() {
		this.news = this.News.getNews();
		console.log(this.news);
		
	}
}

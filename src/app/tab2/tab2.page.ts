import { Router } from "@angular/router";
import { NewsHeadlineService } from "./../service/newsHeadline/news-headline.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-tab2",
	templateUrl: "tab2.page.html",
	styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
	News: any[] = [];
	constructor(
		private http: HttpClient,
		private news: NewsHeadlineService,
		private router: Router,
	) {}
	ngOnInit(): void {
		this.http
			.get<{ articles: any[] }>(
				"http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=f7e6050983c14d0cb675dc8f8b6164f2",
			)
			.subscribe((re) => {
				console.log(re);
				this.News = re.articles;
			});
	}
	readMore(news) {
		this.news.setNewsReadMore(news);
		console.log(news);
		this.router.navigate(["/read-more"]);
	}
}

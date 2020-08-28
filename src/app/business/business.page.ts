import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NewsHeadlineService } from './../service/newsHeadline/news-headline.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: "app-business",
	templateUrl: "./business.page.html",
	styleUrls: ["./business.page.scss"],
})
export class BusinessPage implements OnInit {
	News: any[] = [];
	constructor(
		private news: NewsHeadlineService,
		private http: HttpClient,
		private router: Router,
	) {}

	ngOnInit() {
		this.http
			.get<{ articles: any[] }>(
				"http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f7e6050983c14d0cb675dc8f8b6164f2",
			)
			.subscribe((re) => {
				this.News = re.articles;
				console.log(this.News);
			});
	}
	readMore(news) {
		this.news.setNewsReadMore(news);
		console.log(news);
		this.router.navigate(["/read-more"]);
	}
}

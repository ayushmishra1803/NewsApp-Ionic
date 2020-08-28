import { LoadingController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { NewsHeadlineService } from "./../service/newsHeadline/news-headline.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-tab1",
	templateUrl: "tab1.page.html",
	styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
	News: any[] = [];
	constructor(
		private news: NewsHeadlineService,
		private http: HttpClient,
		private router: Router,
		private loading: LoadingController,
	) {}
	ngOnInit(): void {
		this.loading
			.create({ keyboardClose: true, message: "News Headlines..." })
			.then((res) => {
				res.present();
				this.http
					.get<{ articles: any[] }>(
						"http://newsapi.org/v2/top-headlines?country=in&apiKey=f7e6050983c14d0cb675dc8f8b6164f2",
					)
					.subscribe((re) => {
						this.News = re.articles;
						res.dismiss();
					});
			});
	}
	readMore(news) {
		this.news.setNewsReadMore(news);
		console.log(news);
		this.router.navigate(["/read-more"]);
	}
}

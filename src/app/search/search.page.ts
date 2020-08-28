import { NewsHeadlineService } from "./../service/newsHeadline/news-headline.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Component, OnInit, ɵɵstyleMapInterpolateV } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Component({
	selector: "app-search",
	templateUrl: "./search.page.html",
	styleUrls: ["./search.page.scss"],
})
export class SearchPage implements OnInit {
	constructor(
		private router: Router,
		private http: HttpClient,
		private news: NewsHeadlineService,
		public loadingController: LoadingController,
	) {}
	category = [
		"entertainment",
		"general",
		"health",
		"science",
		"sports",
		"technology",
	];
	List: boolean = true;
	searched: string;
	iteams = [];
	ngOnInit() {
    this.iteams=this.category;
  }
	News: any[] = [];
	onchange(event) {
		this.List = true;
		let search = event.target.value;
		let i = 1;
		console.log(search);
		this.iteams = this.category.filter((re) => {
			return re.toLowerCase().indexOf(search.toLowerCase()) > -1;
		});
		console.log(this.iteams);
	}
	select(iteam) {
		this.searched = iteam;

		this.loadingController
			.create({ keyboardClose: true, message: "Loading..." })
			.then((res) => {
				res.present();
				this.http
					.get<{ articles: any[] }>(
						`http://newsapi.org/v2/top-headlines?country=in&category=${iteam}&apiKey=f7e6050983c14d0cb675dc8f8b6164f2`,
					)
					.subscribe((re) => {
						this.List = false;
						this.News = re.articles;
						res.dismiss();
						console.log(this.News);
					});
			});
	}
	readMore(news) {
		this.news.setNewsReadMore(news);
		console.log(news);
		this.router.navigate(["/read-more"]);
	}
}

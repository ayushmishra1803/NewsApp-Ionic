import { Component, OnInit } from '@angular/core';

@Component({
	selector: "app-search",
	templateUrl: "./search.page.html",
	styleUrls: ["./search.page.scss"],
})
export class SearchPage implements OnInit {
	constructor() {}
	category = [
		"entertainment",
		"general",
		"health",
		"science",
		"sports",
		"technology",
	];
	ngOnInit() {}
	onchange(event) {
		console.log(event.target.value);
	}
}

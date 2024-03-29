import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
	{
		path: "tabs",
		component: TabsPage,
		children: [
			{
				path: "News",
				loadChildren: () =>
					import("../tab1/tab1.module").then((m) => m.Tab1PageModule),
			},
			{
				path: "Sports",
				loadChildren: () =>
					import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
			},

			{
				path: "entertainment",
				loadChildren: () =>
					import("../entertainment/entertainment.module").then(
						(m) => m.EntertainmentPageModule,
					),
			},
			{
				path: "developer",
				loadChildren: () =>
					import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
			},

			{
				path: "",
				redirectTo: "/tabs/News",
				pathMatch: "full",
			},
			{
				path: "search",
				loadChildren: () =>
					import("../search/search.module").then((m) => m.SearchPageModule),
			},
			{
				path: "business",
				loadChildren: () =>
					import("../business/business.module").then(
						(m) => m.BusinessPageModule,
					),
			},
		],
	},
	{
		path: "",
		redirectTo: "/tabs/News",
		pathMatch: "full",
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TabsPageRoutingModule {}

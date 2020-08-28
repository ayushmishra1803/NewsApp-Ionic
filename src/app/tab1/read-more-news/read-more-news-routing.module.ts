import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadMoreNewsPage } from './read-more-news.page';

const routes: Routes = [
  {
    path: '',
    component: ReadMoreNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadMoreNewsPageRoutingModule {}

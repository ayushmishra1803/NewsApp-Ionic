import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadMoreNewsPageRoutingModule } from './read-more-news-routing.module';

import { ReadMoreNewsPage } from './read-more-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadMoreNewsPageRoutingModule
  ],
  declarations: [ReadMoreNewsPage]
})
export class ReadMoreNewsPageModule {}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReadMoreNewsPage } from './read-more-news.page';

describe('ReadMoreNewsPage', () => {
  let component: ReadMoreNewsPage;
  let fixture: ComponentFixture<ReadMoreNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMoreNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadMoreNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

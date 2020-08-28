import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReadMorePage } from './read-more.page';

describe('ReadMorePage', () => {
  let component: ReadMorePage;
  let fixture: ComponentFixture<ReadMorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

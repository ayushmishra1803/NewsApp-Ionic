import { TestBed } from '@angular/core/testing';

import { NewsHeadlineService } from './news-headline.service';

describe('NewsHeadlineService', () => {
  let service: NewsHeadlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsHeadlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

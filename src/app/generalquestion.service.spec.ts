import { TestBed } from '@angular/core/testing';

import { GeneralquestionService } from './generalquestion.service';

describe('GeneralquestionService', () => {
  let service: GeneralquestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralquestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

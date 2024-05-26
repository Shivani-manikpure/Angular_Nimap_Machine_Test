import { TestBed } from '@angular/core/testing';

import { QuestionbankService } from './questionbank.service';

describe('QuestionbankService', () => {
  let service: QuestionbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

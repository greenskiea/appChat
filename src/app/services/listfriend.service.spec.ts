import { TestBed } from '@angular/core/testing';

import { ListfriendService } from './listfriend.service';

describe('ListfriendService', () => {
  let service: ListfriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListfriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

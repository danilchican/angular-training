import { TestBed } from '@angular/core/testing';

import { CoursesListItemService } from './courses-list-item.service';

describe('CoursesListItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursesListItemService = TestBed.get(CoursesListItemService);
    expect(service).toBeTruthy();
  });
});

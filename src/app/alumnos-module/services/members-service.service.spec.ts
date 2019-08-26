import { TestBed, inject } from '@angular/core/testing';

import { AlumnosServiceService } from './alumnos-service.service';

describe('AlumnosServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlumnosServiceService]
    });
  });

  it('should be created', inject([AlumnosServiceService], (service: AlumnosServiceService) => {
    expect(service).toBeTruthy();
  }));
});

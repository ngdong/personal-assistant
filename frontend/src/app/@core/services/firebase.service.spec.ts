import { TestBed } from '@angular/core/testing';
import { CoreModule } from '@core/core.module';
import { MockCredentialsService } from '@core/mocks/credentials.service.mock';
import { CredentialsService } from '@core/services/credentials.service';
import { FirebaseService } from '@core/services/firebase.service';

describe('FirebaseService', () => {
  let service: FirebaseService;
  let credentialsService: CredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule
      ],
      providers: [
        { provide: CredentialsService, useClass: MockCredentialsService },
        FirebaseService
      ]
    });
    service = TestBed.inject(FirebaseService);
    credentialsService = TestBed.inject(CredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

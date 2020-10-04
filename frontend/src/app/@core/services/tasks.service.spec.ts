import { TestBed } from '@angular/core/testing';
import { CoreModule } from '@core/core.module';
import { CredentialsService } from '@core/services/credentials.service';
import { MockCredentialsService } from '@core/mocks/credentials.service.mock';
import { TasksService } from '@core/services/tasks.service';

describe('TasksService', () => {
  let service: TasksService;
  let credentialsService: CredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule
      ],
      providers: [
        { provide: CredentialsService, useClass: MockCredentialsService },
        TasksService
      ]
    });
    service = TestBed.inject(TasksService);
    credentialsService = TestBed.inject(CredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

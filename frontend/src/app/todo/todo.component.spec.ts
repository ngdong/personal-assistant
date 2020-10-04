import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { TrackByPropertyPipe } from '@shared/pipes/track-by-property.pipe';
import { MockNgdIconsComponent } from '@core/mocks/ngd-icons.component.mock';
import { CircularProgressComponent } from '@shared/components/circular-progress/circular-progress.component';
import { ShowTimePipe } from './pipes/show-time.pipe';

import { TodoComponent } from './todo.component';
import { TasksService } from '@core/services/tasks.service';
import { MockTasksService } from '@core/mocks/tasks.service.mock';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        FormsModule
      ],
      declarations: [
        TodoComponent,
        CircularProgressComponent,
        MockNgdIconsComponent,
        ShowTimePipe,
        TrackByPropertyPipe
      ],
      providers: [
        { provide: TasksService , useClass: MockTasksService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

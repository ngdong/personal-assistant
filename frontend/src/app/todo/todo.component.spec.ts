import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '@app/@core/core.module';
import { MockNgdIconsComponent } from '@core/mocks/ngd-icons.component.mock';
import { CircularProgressComponent } from '@shared/components/circular-progress/circular-progress.component';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule
      ],
      declarations: [
        TodoComponent,
        CircularProgressComponent,
        MockNgdIconsComponent
      ],
      providers: []
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

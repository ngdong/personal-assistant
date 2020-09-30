import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { AuthenticationService } from '@core/services/authentication.service';

import { DashboardComponent } from './dashboard.component';
import { MockNgdIconsComponent } from '@app/@core/mocks/ngd-icons.component.mock';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockRouter: any;

  beforeEach(async(() => {
    mockRouter = {
      navigate: jest.fn()
    };
    TestBed.configureTestingModule({
      imports: [
        CoreModule
      ],
      declarations: [
        DashboardComponent,
        MockNgdIconsComponent
      ],
      providers: [
        AuthenticationService,
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

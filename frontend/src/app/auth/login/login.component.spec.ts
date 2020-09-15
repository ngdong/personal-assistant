import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '@core/core.module';
import { LoginComponent } from './login.component';
import { CredentialsService } from '@core/services/credentials.service';
import { AuthenticationService } from '@core/services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter: any;

  beforeEach(async(() => {
    mockRouter = {
      navigate: jest.fn()
    };
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        FormBuilder,
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

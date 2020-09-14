import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '@core/core.module';
import { LoginComponent } from './login.component';
import { CredentialsService } from '@core/services/credentials.service';
import { AuthenticationService } from '@core/services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        AuthenticationService,
        CredentialsService,
        Router,
        FormBuilder
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

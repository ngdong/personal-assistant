import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsService } from '@core/services/credentials.service';
import { AuthenticationService } from '@core/services/authentication.service';
import { untilDestroyed } from '@core/utils/until-destroyed';

@Component({
  selector: 'ngd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private credentialsService: CredentialsService,
    private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
    if (this.credentialsService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control('')
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value)
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.router.navigate(['/']);
      });
  }

  ngOnDestroy() {}
}

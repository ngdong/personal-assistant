import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@core/services/authentication.service';
import { untilDestroyed } from '@core/utils/until-destroyed';

@Component({
  selector: 'ngd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.router.navigate(['/login']);
      });
  }

  ngOnDestroy() {}
}

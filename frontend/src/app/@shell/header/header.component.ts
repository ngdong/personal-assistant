import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface MenuItem {
  title: string;
  page: string;
}

@Component({
  selector: 'ngd-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  private currentRouteUrl: string;
  public menuItems: MenuItem[] = [
    { title: 'Dashboard' , page: ''},
    { title: 'Todo' , page: 'todo'},
    { title: 'Financial' , page: 'financial'},
  ];
  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    this.currentRouteUrl = this.router.url.split(/[?#]/)[0];

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.currentRouteUrl = this.router.url.split(/[?#]/)[0];
        this.cdr.markForCheck();
      });
  }

  /* Check Menu is active */
  public isMenuItemIsActive(item: MenuItem): boolean {
    if (item.page.length === 0) {
      return this.currentRouteUrl === '/';
    }
    return this.currentRouteUrl.indexOf(item.page) !== -1;
  }
}

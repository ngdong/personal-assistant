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
  private isMenuItemIsActive(item: MenuItem): boolean {
    if (item.page.length === 0) {
      return this.currentRouteUrl === '/';
    }
    return this.currentRouteUrl.indexOf(item.page) !== -1;
  }

  /* Return menu item class */
  public getItemCssClasses(item: MenuItem) {
    const classes = 'block mt-4 lg:inline-block lg:mt-0 mr-4 px-4 py-1 rounded-full border border-transparent';
    return this.isMenuItemIsActive(item)
      ? `${classes} font-medium border-blue-500 bg-blue-500`
      : `${classes} hover:border-white hover:bg-transparent`;
  }
}

import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { delay, filter, Subject, takeUntil, withLatestFrom } from 'rxjs';
import { sidebarItems, SideBarItems } from 'src/app/config/sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  destroyed = new Subject<void>();
  @Input() drawer!: MatDrawer;
  sidebarItems: SideBarItems[] = [];
  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.sidebarItems = sidebarItems;
    this.autoToggleSideNav();
  }

  autoToggleSideNav() {
    const breakPointChanged$ = this.breakpointObserver.observe(['(max-width: 768px)']).pipe(
      delay(0),
      takeUntil(this.destroyed)
    );

    breakPointChanged$.subscribe(
      (breakPoint) => {
        if (breakPoint.matches) {
          this.drawer.close();
        }
        else {
          this.drawer.open();
        }
      },
      (err) => {
      },
    );
  }
}

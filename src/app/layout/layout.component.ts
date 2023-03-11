import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../service/scroll.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit  {

  constructor(private scrollService: ScrollService) {
  }

  ngOnInit(): void {

  }

  onScroll() {
    this.scrollService.scrolled();
  }
}

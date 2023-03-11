import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private value:number = 5;
  constructor() {
    console.log("im init", this.value );
    this.value = 6;
  }

  private onScrolledSubject = new Subject();
  onScrolled$ = this.onScrolledSubject.asObservable();

  scrolled() {
    this.onScrolledSubject.next(this.value);
  }
}

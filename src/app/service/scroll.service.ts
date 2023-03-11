import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() {

  }

  private onScrolledSubject = new Subject();
  onScrolled$ = this.onScrolledSubject.asObservable();

  scrolled() {
    this.onScrolledSubject.next(null);
  }
}

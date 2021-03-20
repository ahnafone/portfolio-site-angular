import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private ignoreScroll = false;

  private pages: string[] = ["top", "edu", "work"];
  private page: number;
  private pageSub: BehaviorSubject<number>;

  constructor() {
    this.page = 0;
    this.pageSub = new BehaviorSubject<number>(0);
  }


  getPageObs(): Observable<number> {
    return this.pageSub.asObservable();
  }
  getPages(): string[] {
    return this.pages;
  }


  ignoreScrollTimeout() {
    this.ignoreScroll = true;
    setTimeout(() => {
      this.ignoreScroll = false;
    }, 800)
  }

  navigate(output) {
    if(this.ignoreScroll) {
      return;
    } else {
      this.ignoreScrollTimeout();
    }

    if(output.up) {
      this.page--;
      this.pageSub.next(this.page);
    } else if(output.down) {
      this.page++;
      this.pageSub.next(this.page);
    } else if(output.top) {
      this.page = 0;
      this.pageSub.next(0);
    }
  }

  jumpToPage(i: number) {
    if(this.ignoreScroll) {
      return;
    } else {
      this.ignoreScrollTimeout();
    }

    if(i >= 0 && i < this.pages.length) {
      this.page = i;
      this.pageSub.next(i);
    }
  }
}

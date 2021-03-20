import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-page-indicator',
  templateUrl: './page-indicator.component.html',
  styleUrls: ['./page-indicator.component.css']
})
export class PageIndicatorComponent implements OnInit, OnDestroy {

  show = false;
  pages: string[] = [];
  page: number = 0;
  pageRef: Subscription;

  constructor(private scroll: ScrollService) {
    this.pages = scroll.getPages();
  }

  ngOnInit(): void {
    this.pageRef = this.scroll.getPageObs().subscribe(page => this.page = page);
    setTimeout(() =>{ this.show = true }, 3000);
  }
  ngOnDestroy(): void {
    this.pageRef.unsubscribe();
  }


  jumpTo(i: number) {
    if(i != this.page) {
      this.scroll.jumpToPage(i);
    }
  }

}

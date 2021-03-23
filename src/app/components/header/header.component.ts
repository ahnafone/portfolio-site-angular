import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  pages: number = 0;
  page: number = 0;
  pageRef: Subscription;

  constructor(private scroll: ScrollService) { }

  ngOnInit(): void {
    this.pages = this.scroll.getPages().length;
    this.pageRef = this.scroll.getPageObs().subscribe(page => this.page = page);
  }

  ngOnDestroy(): void {
    this.pageRef.unsubscribe();
  }


  goto(i: number) {
    this.scroll.jumpToPage(i);
  }

}

import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Subscription } from 'rxjs';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  scrollListener;
  pageHeight: number = 0;
  pages: string[] = [];

  // State Variables
  page: number = -1;
  pageRef: Subscription;
  prevY: number = 0;

  ignoreScroll = false;

  // Icons
  faGit = faGithub;
  faLinkedIn = faLinkedinIn;

  constructor(private renderer: Renderer2, private scroller: ScrollToService, private scroll: ScrollService) { }

  ngOnInit(): void {
    this.pages = this.scroll.getPages();
    this.pageHeight = document.body.scrollHeight / this.pages.length;


    this.pageRef = this.scroll.getPageObs().subscribe(page => {
      if(page != this.page) {
        if(!this.ignoreScroll) {
          this.ignoreScrollTimeout();
        }

        this.page = page;
        this.prevY = this.pageHeight * page;
        this.scrollTo();
      }
    });

    this.scrollListener = this.renderer.listen('window', 'scroll', e => {
      if(this.ignoreScroll) {
        return;
      } else {
        this.ignoreScrollTimeout();
      }

      let ypos = e.target.scrollingElement.scrollTop;
      if((this.page+1) == this.pages.length && ypos > this.prevY) {
        this.prevY = 0;
        this.scroll.navigate({ top: true });
      } else if(ypos > this.prevY) {
        this.prevY = this.pageHeight * (this.page+1);
        this.scroll.navigate({ down: true });
      } else if(this.page != 0 && ypos < this.prevY) {
        this.prevY = this.pageHeight * (this.page-1);
        this.scroll.navigate({ up: true });
      }
    });

    this.scroll.jumpToPage(2);
  }

  ngOnDestroy(): void {
    this.scrollListener();
    this.pageRef.unsubscribe();
  }


  ignoreScrollTimeout() {
    this.ignoreScroll = true;
    setTimeout(() => {
      this.ignoreScroll = false;
    }, 800)
  }

  scrollTo() {
    this.scroller.scrollTo({
      target: this.pages[this.page],
      duration: 450,
    }).subscribe(
      value => { },
      err => console.error(err)
    );
  }

}

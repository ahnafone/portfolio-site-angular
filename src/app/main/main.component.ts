import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Subscription } from 'rxjs';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren("pageElem") pageElems: QueryList<ElementRef>;

  scrollListener;
  pages: string[] = [];

  // State Variables
  page: number = -1;
  pageRef: Subscription;
  prevY: number = 0;

  ignoreScroll = false;
  ignoreTimer;

  // Icons
  faGit = faGithub;
  faLinkedIn = faLinkedinIn;

  constructor(private renderer: Renderer2, private scroll: ScrollService, private scrollToService: ScrollToService) { }

  ngOnInit(): void {
    this.pages = this.scroll.getPages();

    this.scrollListener = this.renderer.listen('window', 'scroll', e => {
      let ypos = e.target.scrollingElement.scrollTop;
      let prev = this.prevY;

      if(!this.ignoreScroll) {
        this.ignoreScrollTimeout();

        if(this.page != (this.pages.length-1) && ypos > prev) {
          this.scroll.navigate({ down: true });
        } else if(this.page != 0 && ypos < prev) {
          this.scroll.navigate({ up: true });
        }
      }

      this.prevY = ypos;
      console.log({ ypos, prev: this.prevY });
    });
  }

  ngAfterViewInit(): void {
    this.pageRef = this.scroll.getPageObs().subscribe(page => {
      if(page != this.page) {
        if(!this.ignoreScroll) {
          this.ignoreScrollTimeout();
        }

        this.page = page;
        this.scrollTo(page);
      }
    });
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

  scrollTo(i: number) {
    this.scrollToService.scrollTo({
      target: this.pages[i],
      duration: 450
    }).subscribe(
      value => { console.log(value) },
      err => console.error(err)
    );
  }

}

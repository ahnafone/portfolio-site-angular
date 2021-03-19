import { Component, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  @HostListener('scroll') onScrollHost(e: Event): void {
    console.log(e);
  }

  scrollListener;
  pages: number = 2;
  pageHeight: number = 0;

  // State Variables
  page: number = 1;

  


  constructor(private renderer: Renderer2) {

    this.scrollListener = this.renderer.listen('window', 'scroll', e => {
      //console.log( e.target.scrollingElement.scrollTop );
    });


    let maxHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    this.pageHeight = maxHeight / this.pages;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.scrollListener();
  }


  navigate(output: { up: boolean, down: boolean, top: boolean }) {
    if(output.up) {
      // move up
    } else if(output.down) {
      // move down
    } else if(output.top) {

    }
  }

}

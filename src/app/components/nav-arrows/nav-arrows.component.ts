import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-nav-arrows',
  templateUrl: './nav-arrows.component.html',
  styleUrls: ['./nav-arrows.component.css']
})
export class NavArrowsComponent implements OnInit, OnDestroy {

  pages: number = 0;
  page: number = 0;
  pageRef: Subscription;
  show: boolean = false;

  faUp = faAngleUp;
  faDown = faAngleDown;

  constructor(private scroll: ScrollService) {
    this.pages = scroll.getPages().length;
    this.pageRef = scroll.getPageObs().subscribe(page => {
      this.page = page;
      this.displayNav();
    });
  }

  ngOnInit(): void {
    this.displayNav();
  }
  ngOnDestroy(): void {
    this.pageRef.unsubscribe();
  }


  displayNav() {
    this.show = false;
    setTimeout(() => {
      this.show = true;
    }, 3000);
  }


  navigate(dir: boolean) {
    if(dir) {
      this.scroll.navigate({ up: true });
    } else {
      this.scroll.navigate({ down: true });
    }
  }

  navigateTop() {
    this.scroll.navigate({ top: true });
  }

}

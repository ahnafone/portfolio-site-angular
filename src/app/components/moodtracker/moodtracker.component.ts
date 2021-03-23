import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-moodtracker',
  templateUrl: './moodtracker.component.html',
  styleUrls: ['./moodtracker.component.css']
})
export class MoodtrackerComponent implements OnInit {

  @ViewChildren("mood") imgElems: QueryList<ElementRef>;

  lst = new Array(8);
  faLeft = faAngleLeft;
  faRight = faAngleRight;

  curr = 0;

  constructor() { }

  ngOnInit(): void {}


  navigate(dir) {
    if(dir && this.curr != 7) {
      if(this.curr == 6) {
        this.curr = 7;
      } else {
        this.curr += 3;
      }
    } else if(!dir && this.curr != 0) {
      if(this.curr == 1) {
        this.curr = 0;
      } else {
        this.curr -= 3;
      }
    }

    this.imgElems.toArray()[this.curr].nativeElement.scrollIntoView({ block: "nearest", inline: 'end', behavior: 'smooth' });
  }

}

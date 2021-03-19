import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-arrows',
  templateUrl: './nav-arrows.component.html',
  styleUrls: ['./nav-arrows.component.css']
})
export class NavArrowsComponent implements OnInit {

  @Output() output: EventEmitter<{ up: boolean, down: boolean, top: boolean }>;
  show: boolean = false;
  @Input() bottom: boolean = false;

  faUp = faAngleUp;
  faDown = faAngleDown;

  constructor() {
    this.output = new EventEmitter<{ up: boolean, down: boolean, top: boolean }>();
  }

  ngOnInit(): void {
    this.displayNav();
  }


  displayNav() {
    setTimeout(() => {
      this.show = true;
    }, 3000);
  }


  navigate(dir: boolean) {
    if(dir) {
      this.output.emit({
        up: true,
        down: false,
        top: false
      });
    } else {
      this.output.emit({
        up: false,
        down: true,
        top: false
      });
    }

    this.show = false;
    this.displayNav();
  }

  navigateTop() {
    this.output.emit({
      up: false,
      down: false,
      top: true
    });
  }

}

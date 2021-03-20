import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  skills = {
    angular: { month: 7, year: 2020 },
    react: { month: 1, year: 2020 },
    svelte: { month: 1, year: 2021 },

    node: { month: 12, year: 2019 },

    android: { month: 5, year: 2018 },
    flutter: { month: 1, year: 2020 },

    mongo: { month: 12, year: 2019 },
    firestore: { month: 10, year: 2019 }
  };

  constructor() { }

  ngOnInit(): void {
  }


  getTime(time: { month: number, year: number }): string {
    let date = new Date();

    let diff = ( (date.getFullYear() - time.year) * 12) + date.getMonth() - time.month + 1;
    if(diff < 12) {
      return diff + " months";
    } else if(diff >= 12 && diff < 24) {
      return "1 year";
    } else {
      return Math.floor(diff / 12) + " years";
    }
  }

}

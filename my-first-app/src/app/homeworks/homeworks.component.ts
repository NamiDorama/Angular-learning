import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.css']
})
export class HomeworksComponent implements OnInit {
  userName = '';
  clicks = [];
  show = false;

  constructor() { }

  ngOnInit() {

  }

  showDetails() {
    this.clicks.push(this.clicks.length + 1);
    this.show = !this.show;
  }
}

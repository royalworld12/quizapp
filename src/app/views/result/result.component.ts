import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  // styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  scoreData: any;
  constructor() { }

  ngOnInit() {
    this.scoreData = JSON.parse(localStorage.getItem('score'));
  }

}

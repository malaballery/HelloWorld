import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit {

  nC:string ="NC";

  @Input() driver:any

  green:string = "green"
  red:string ="red"
  paddingThumb:string = "10px 15px"

  constructor() { }

  ngOnInit(): void {
  }

  vote(i:number) {
    this.driver.likeIts = this.driver.likeIts + i;
  }
}

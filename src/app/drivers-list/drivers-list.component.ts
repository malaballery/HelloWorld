import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  colorOne:string = "blue";

  colorOn:string= "yellow";

  onOff:boolean = true;

  product:any = {
    label: "iphone12",
    price: 1584122,
    stock: 15
  }

  marginPts:string = "10px";
  constructor() { }

  ngOnInit(): void {
  }

  getColor() {
    return "green";
  }
  getColorOff() {
    return "black";
  }

  onSwitch() {
    if(this.onOff) {
      this.onOff = false;
    } else {
      this.onOff = true;
    }
  }
}

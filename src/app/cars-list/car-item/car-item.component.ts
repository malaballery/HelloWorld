import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  vehicule:string = "Ferrari";

  @Input() enfant:any;

  constructor() { }

  ngOnInit(): void {
  }

}

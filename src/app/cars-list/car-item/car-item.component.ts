import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input() vehicule:any
  @Input() car:any

  onSurvol() {
    alert ("Réservez cette voiture en cliquant sur commander !")
  }

  isBooked:boolean = false;
  bookingMessage:string = "Réserver maintenant";

  onClick() {
    this.isBooked=true
    this.bookingMessage = "Cette voiture est réservée"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  
  carUpdate:any;

  cars!: Car[];

  spoilCar = new Car("Tuture", "Groland", "https://i.skyrock.net/2777/14952777/pics/519180567.jpg", null , 19.5);

  constructor(private data:DataService) {}

  ngOnInit(): void 
  {
    this.carUpdate = new Date;
    this.data.cars.push(this.spoilCar)
    this.cars = this.data.getAllCars();
    console.log(this.spoilCar)
  }

}

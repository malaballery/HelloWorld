import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title:string="DriveX";

  userName:any;

  bestDrivers:any = this.driver.getNbBestDrivers(3);
  bestCars:any = this.car.getNbPowerfullCars(3);
  constructor(private driver:DataService, private car:DataService) { 
    this.driver.getNbBestDrivers(3)
    this.car.getNbPowerfullCars(3)
  }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title:string="DriveX";

  bestDrivers:any;
  bestCars:any;

  userName:any;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.bestDrivers = this.data.getNbBestDrivers(3)
    this.bestCars = this.data.getNbPowerfullCars(3)
  }

}

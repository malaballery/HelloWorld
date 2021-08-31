import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  driverUpdate:any;
  drivers: any;
  
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.driverUpdate = new Date;
    this.drivers = this.data.getAllDrivers();
  }

}

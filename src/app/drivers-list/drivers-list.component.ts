import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  drivers:any = this.driver.getAllDrivers();

  constructor(private driver:DataService) { 
    driver.getAllDrivers()

  }

  ngOnInit(): void {
  }

}

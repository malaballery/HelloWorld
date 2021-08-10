import { Component, Input, OnInit } from '@angular/core';
import { BananeService } from '../services/banane.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title:string="DriveX";
  prixResto:number = this.resto.getPrice();

  fruit:any = this.truc.getFruit();
  userName:any;

  constructor(private truc:BananeService,
              private resto:RestaurantService) {
    console.log(truc.getFruit())
    console.log(resto.name)
   }
  ngOnInit(): void {
  }

}
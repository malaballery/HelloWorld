import { Injectable } from '@angular/core';
import { BananeService } from './banane.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  name:string = "le beBio";
  prixResto:number | undefined | null;

  constructor(private banana:BananeService){}

  getPrice() {
    return this.prixResto = this.banana.prix * 1.4; 
  }
}

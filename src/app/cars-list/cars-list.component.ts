import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  // 1er exemple d'interpolation
  // type string int ou n'importe
  mardiMatin:any = "Ils ont l'air bien OFF";

  //2e exemple d'objet ou propriété 

  game: any = {
    title: "Among Us",
    support: "Android",
    multi: 10
  }

  userEmail="test@test.fr";

  coverImage:string = "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs.jpg";

  age:number = 77;
  constructor() { }

  ngOnInit(): void {
  }

  // Interpolation du retour d'une méthode

  getStock(){
    return 2050;
  }

  isNotAvailable(){
    return false;
  }

  //Appel à une méthode pour toutes sortes de traitement
  getMakeUp(){
    console.log("Silence")
  }
  
  enfantUn= "Bird";
  enfantDeux= "Fille";
  enfantTrois= "Garçon";
}

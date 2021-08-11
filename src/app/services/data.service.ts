import { createAotCompiler } from '@angular/compiler';
import { Injectable, ɵisListLikeIterable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  test:any = "test";

  cars:any = [
    {
      name: "pagani huayra",
      pays: null,
      coverImage:"./assets/img/cars/pagani.jpg",
      power: 765,
      perf: 3.2
    },
    {
      name: "koenigsegg agera rs",
      pays: "suède",
      coverImage:"./assets/img/cars/koenigsegg.jpg",
      power: 1383,
      perf: null

    },
    {
      name: "zenvo tsr s",
      pays: "danemark",
      coverImage:"./assets/img/cars/zenvo.jpg",
      power: 1200,
      perf: 2.8
    },
    {
      name: "bugatti chiron",
      pays: "france",
      coverImage:"./assets/img/cars/bugatti.jpg",
      power: null,
      perf: 2.4
    },
    {
      name: "mercedes amg one",
      pays: "allemagne",
      coverImage:"./assets/img/cars/mercedes.jpg",
      power: 1000,
      perf: 2.2
    },
    {
      name: "ferrari sf90",
      pays: "italie",
      coverImage:"./assets/img/cars/ferrari.jpg",
      power: 1000,
      perf: 2.5
    }
  ]
  drivers: any = [
    {
      fullName: "ken block",
      pays: "usa",
      coverImage: "./assets/img/drivers/kenblock.jpg",
      category: "gymkhana",
      likeIts: -1
    },
    {
      fullName: "danica patrick",
      pays: "usa",
      coverImage: "./assets/img/drivers/danicapatrick.jpg",
      category: "nascar",
      likeIts: 3
    },
    {
      fullName: "sebastien loeb",
      pays: "france",
      coverImage: "./assets/img/drivers/Loeb.jpg",
      category: "rallye",
      likeIts: 1
    },
    {
      fullName: "molly taylor",
      pays: "australie",
      coverImage: "./assets/img/drivers/mollytaylor.jpg",
      category: "rallye",
      likeIts: -1
    },
    {
      fullName: "collin mcrae",
      pays: "écosse",
      coverImage: "./assets/img/drivers/colin.jpg",
      category: "rallye",
      likeIts: 0
    },
    {
      fullName: "shirley muldowney",
      pays: null,
      coverImage: "./assets/img/drivers/shirleymuldowney.jpg",
      category: "drag",
      likeIts: 0
    },
    {
      fullName: "michael schumacher",
      pays: "allemagne",
      coverImage: "./assets/img/drivers/schumacher.jpg",
      category: "formule 1",
      likeIts: 0
    },
    {
      fullName: "erica enders",
      pays: "usa",
      coverImage: "./assets/img/drivers/ericaenders.jpg",
      category: "drag",
      likeIts: 0
    },
    
  ];
  constructor() { }

  getAllCars() {
    return this.cars
  }

  getAllDrivers() {
    return this.drivers
  }

  getNbBestDrivers(nb:number){
    var allDrivers = this.drivers.slice()
    allDrivers.sort((function compare(a: { likeIts: number; }, b: { likeIts: number; }) {
      if (a.likeIts > b.likeIts)
         return -1;
      else if (a.likeIts < b.likeIts )
         return 1;
      else return 0;
    }))
    return allDrivers.slice(0, nb)
  }

  getNbPowerfullCars(nb:number){
    var allCars = this.cars.slice()
    allCars.sort((function compare(a: { power: number; }, b: { power: number; }) {
      if (a.power > b.power)
         return -1;
      else if (a.power < b.power )
         return 1;
      else return 0;
    }))
    return allCars.slice(0, nb)
  }
  
  // Correction Prof
  // getNbPowerfullCars(nb:number){
  //   var allCars = this.cars.slice()
  //   allCars.sort( (carB: { power: number; }, carA: { power: number; }) => { return carA.power - carB.power })
  //   return allCars.slice(allCars.lenght, nb)
  // }
}



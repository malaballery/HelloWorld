import { Injectable } from "@angular/core";

@Injectable()

export class BananeService {

    fruit:string = "Banane plantain";
    prix:number = 4;

    constructor() {}

    /**
     * Fonction qui retourne une var string
     * 
     * @returns string
     * 
     * @author ML
     */
    
    getFruit() {
        return this.fruit;
    }
}
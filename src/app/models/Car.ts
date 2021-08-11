/**
 * Class Car 
 */

export class Car {

    constructor(public name:string,
                public pays:string,
                public coverImage:string,
                public power?:number | null,
                public perf?:number) {
    }
}
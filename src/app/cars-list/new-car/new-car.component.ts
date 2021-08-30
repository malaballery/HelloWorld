import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/Car';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  constructor(private data:DataService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(myForm: NgForm){
    const newCar = new Car(myForm.value['name'],
                            myForm.value['pays'],
                            myForm.value['coverImage'],
                            myForm.value['power'],
                            myForm.value['perf']);
    this.data.addNewCar(newCar);
    console.log(myForm.value);
    setTimeout( () => {
      this.router.navigate(['/cars'])
    } , 2000)
  }
}

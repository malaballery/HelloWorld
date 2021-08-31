import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Car } from '../../models/Car';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  constructor(private data:DataService,
              private router:Router) { }

  submitted = false;

  ngOnInit(): void {
  }

  onSubmit(myForm: NgForm){
    const newCar = new Car(myForm.value['name'],
                            myForm.value['pays'],
                            myForm.value['coverImage'],
                            myForm.value['power'],
                            myForm.value['perf']);
    this.data.addNewCar(newCar);
    this.submitted = true;
    setTimeout( () => {
      this.router.navigate(['/cars'])
    } , 2000)
  }
}

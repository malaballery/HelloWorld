import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from 'src/app/models/Driver';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {

  constructor(private data:DataService,
              private router:Router) { }

  submitted = false;

  ngOnInit(): void {
  }

  onSubmit(myForm: NgForm){
    const newDriver = new Driver(myForm.value['fullName'],
                            myForm.value['pays'],
                            myForm.value['coverImage'],
                            myForm.value['category'],
                            myForm.value['likeIts']);
    this.data.addNewDriver(newDriver);
    this.submitted = true;
    setTimeout( () => {
      this.router.navigate(['/drivers'])
    } , 2000)
  }

}

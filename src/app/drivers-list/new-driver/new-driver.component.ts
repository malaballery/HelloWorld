import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from 'src/app/models/Driver';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {

  driverForm!: FormGroup;
  minLong: number = 2;

  constructor(private data:DataService,
              private fb:FormBuilder,
              private router:Router) { }


  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.driverForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(this.minLong)]],
      pays: ['', Validators.required],
      coverImage: ['', Validators.required],
      category: ['', Validators.required]
    })
  }

  onSubmit(){
    const formValue = this.driverForm.value;
    const driver = new Driver(
      formValue['fullName'],
      formValue['pays'],
      formValue['category'],
      formValue['coverImage']
    )
    setTimeout( () => {
      this.router.navigate(['/drivers'])
    } , 2000)
  }

}

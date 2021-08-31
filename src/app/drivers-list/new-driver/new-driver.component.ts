import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {

newDriver = this.fb.group({
  fullName: ['', Validators.required],
  pays: ['', Validators.required],
  coverImage: ['', Validators.required],
  category: ['', Validators.required]
});

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
  }

  // updateFullName() {
  //   this.fullName.setValue('Nancy');
  // }

}

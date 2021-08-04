import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {


  isOnline:boolean = true;
  book:any = {
    title: "Le secret des croisades",
    author: "Julien",
    size: 12,
    description: "Andréa a dit que Thomas avait un petit zizi",
    price: null
  }

  games:any[] = ["Harry Potter 4", "Overwatch", "Minecraft" ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app8-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayImages = [ 
    "../../public/images/1.jpg", 
    "../../public/images/2.jpg"
  ];

  imagesCounter = this.arrayImages.length;

  numero = Math.floor(Math.random()*this.imagesCounter);

  constructor() { }

  ngOnInit() {
  }

}

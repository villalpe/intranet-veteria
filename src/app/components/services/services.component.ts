import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public title: string;
  public title1: string;
  constructor() { 
  	this.title = 'Intranet The Antivenom Company™';
  	this.title1 = 'The Antivenom Company™';
  }

  ngOnInit() {
  }

}

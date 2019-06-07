import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title: string;
  public title1: string;
  constructor() {
  	this.title = 'Intranet The Antivenom Company™';
  	this.title1 = 'The Antivenom Company™';
   }

  ngOnInit() {
  }

}

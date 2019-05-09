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
  	this.title = 'Intranet Veteria Labs';
  	this.title1 = 'Veteria Labs';
   }

  ngOnInit() {
  }

}

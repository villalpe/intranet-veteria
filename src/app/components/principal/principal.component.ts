import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public title: string;
  constructor() { }

  ngOnInit() {
  	this.title = 'Intranet The Antivenom Company™';
  }

}

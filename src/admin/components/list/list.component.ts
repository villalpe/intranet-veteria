import { Component, OnInit, DoCheck } from '@angular/core';
declare let $: any;

import { Router, ActivatedRoute, Params } from '@angular/router';
import { UploadCsv } from '../../../app/models/uploadfilecsv';
import { GLOBAL } from '../../../app/services/global';
import { InvoiceService } from '../../../app/services/invoice.service';
import { UserService } from '../../../app/services/user1.service';

import { fadeLateral } from '../../../admin/animation/animation';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [InvoiceService, UserService],
  animations: [fadeLateral]
})
export class ListComponent implements OnInit {
   public title: string;
   public url: string;
   public status: string;
   public invoices: UploadCsv[];
   public token;
   public busqueda;
   public hide;

   constructor(
   	  private _route: ActivatedRoute,
  	  private _router: Router,
   	  private _invoiceService: InvoiceService,
      private _userService: UserService
   	){
   	  this.title = 'Antiguedad de Saldos';
   	  this.url = GLOBAL.url;
      this.token = this._userService.getToken();
      this.hide = false;
      //this.animal = new Animal('','','',2017,'','');
   }

   ngOnInit(){
     this.getInvoices(); 
   }
    //Este get esta apuntando a CSVImport puerto 5040
    getInvoices(){
      console.log('componente.listado funciona correctamente');
      this._invoiceService.getInvoices().subscribe(
        response => {
          if(!response.invoices){

          }else{
            this.invoices = response.invoices;  
          }
        },
        error => {
          console.log(<any>error);
        }
      );
   }

   deleteInvoice(id){
    $('#myModal-'+id).modal('hide');
    console.log("Id desde el component.listInvoice: "+id);
    this._invoiceService.deleteInvoice(this.token, id).subscribe(
      response => {
        console.log(response.invoice);
        if(!response.invoice){
          alert('Error en el servidor');
        }else{
          this.getInvoices();
        }
      },
      error => {
          alert('Error en el servidor');
      }
    );
   }
 
}
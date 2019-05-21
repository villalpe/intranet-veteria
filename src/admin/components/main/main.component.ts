import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../app/services/user1.service';
import { GLOBAL } from '../../../app/services/global';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'admin-main',
  templateUrl: './main.component.html'
})
export class MainComponent {
  public identity;
  public url: string;	
  public title: string;
  public title1: string;
  public hide: boolean;

  constructor(
  	private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  	){
  	this.title = 'Panel Usuario';
  	this.title1 = 'Veteria Labs';
  	this.url = GLOBAL.url;
    this.hide = true;
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  ngOnInit(){
      this.identity = this._userService.getIdentity();
      console.log('Metodo OnInit con jQuery');
      $(".sidebar-dropdown > a").click(function() {
          $(".sidebar-submenu").slideUp(200);
          if (
            $(this)
              .parent()
              .hasClass("active")
          ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
              .parent()
              .removeClass("active");
          } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
              .next(".sidebar-submenu")
              .slideDown(200);
            $(this)
              .parent()
              .addClass("active");
          }
        });

        $("#close-sidebar").click(function() {
          $(".page-wrapper").removeClass("toggled");
        });
        $("#show-sidebar").click(function() {
          $(".page-wrapper").addClass("toggled");
        });
      }

        logout(){
          localStorage.clear();
          this.identity = null;
          this._router.navigate(['/']);
        }
   }
  

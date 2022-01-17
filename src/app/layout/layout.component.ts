import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    var path = location.pathname;
    
    $('#layoutSidenav_nav .sb-sidenav a.nav-link').each((index:any, element:any) => {
        if ($(element).attr('href') === path) {
            $(element).addClass("active");
        }
    });
     
    $("#sidebarToggle").on("click", function (event: { preventDefault: () => void; }) {
        $("body").toggleClass("sb-sidenav-toggled");
    });
  }

}

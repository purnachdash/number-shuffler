import { Component, HostListener, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'number-shuffler';
  scrHeight: number;
  scrWidth: number;
  isBiggerScreen : boolean = true;
  constructor( ){
    this.getWindowSize();
  }
  ngOnInit(){

  }
  @HostListener('window:resize', ['$event'])
  getWindowSize(event?) {
         
          this.scrHeight = window.innerHeight;
          this.scrWidth = window.innerWidth;
          
          if(this.scrWidth <= 800)
            this.isBiggerScreen = false;
          else
          this.isBiggerScreen = true;
    }
}

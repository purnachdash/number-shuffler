import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-blocks-vertical',
  templateUrl: './number-blocks-vertical.component.html',
  styleUrls: ['./number-blocks-vertical.component.scss']
})
export class NumberBlocksVerticalComponent implements OnInit {
  numbers:number[];
  invisibleText:string='';
  constructor() { }

  ngOnInit() {
    this.numbers = [1,2,3,4,5,6,7,8,9];
  }

  sort(){
    this.numbers.sort();
  }
  shuffle(){
    
    for(let i = this.numbers.length -1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = this.numbers[i];
      this.numbers[i] = this.numbers[j];
      this.numbers[j] = temp;
    }
  }

}

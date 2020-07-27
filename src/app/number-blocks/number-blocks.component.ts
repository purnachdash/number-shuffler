import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-blocks',
  templateUrl: './number-blocks.component.html',
  styleUrls: ['./number-blocks.component.scss']
})
export class NumberBlocksComponent implements OnInit {

  numbers:number[];
  constructor() { }

  ngOnInit() {
    this.numbers = [1,9,3,7,5,6,4,8,2];
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

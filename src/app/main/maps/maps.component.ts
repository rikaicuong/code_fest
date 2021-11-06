import { Component, Input, OnInit } from '@angular/core';

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  @Input() data: any;
  rows: any[] = [];
  rowMasks: any[] = [];
  colums: any[] = [];
  columMasks: any[] = [];
  startValue: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.handleRow();
    this.createColom();
  }

  handleRow() {
    const row = this.data.matrix.split('-')[1];
    
    this.rows = [];
    for (let i = 0; i < row; i ++) {
      if (i === 2) {
        this.rows.push({ index: alphabet[i], value: '' })
      } else {
        this.rows.push({ index: alphabet[i], value: '' })
      }
    }
  }

  createColom() {
    const colum = this.data.matrix.split('-')[0];

    this.colums = [];
    for (let i = colum; i > 0; i--) {
      if (i === 2) {
        this.colums.push({ index: i, value: '' });
      } else {
        this.colums.push({ index: i, value: '' });
      }
    }
  }

  // handleStartValue(row: number, col: number) {
  //   this.startValue = this.data.start.split('-');
  //   this.startValue[1] = alphabet.indexOf(this.startValue[1]);
  // }

  ngOnChanges() {
    this.handleRow();
    this.createColom();
  }

}

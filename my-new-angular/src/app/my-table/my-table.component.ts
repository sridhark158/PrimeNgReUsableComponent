import {Component, Input, OnChanges, OnInit} from '@angular/core';


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit, OnChanges {
  @Input() columnsGot: any[];
  @Input() valueGot: any[];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  /*  console.log('Values:', this.valueGot);*/
  }

}

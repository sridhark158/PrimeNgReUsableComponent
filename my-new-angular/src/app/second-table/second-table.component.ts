import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-second-table',
  templateUrl: './second-table.component.html',
  styleUrls: ['./second-table.component.css']
})
export class SecondTableComponent implements OnInit {

  secondTablecols: any[];
  secondTablevalue: any[];
  constructor() { }

  ngOnInit() {
    this.secondTablecols = [
      { field: 'case_number', header: 'Case Number' },
      { field: 'status', header: 'Status' },
      { field: 'received_at', header: 'Received At ' },
    ];
    this.secondTablevalue = [
      {
        id: '5a673eca-bafa-4a1b-b174-c57d932140a1',
        case_number: '5358',
        received_at: '2017-11-27T10:51:59.794Z',
        status: 'CLOSE'
      },
      {
        id: '8871c2d7-2ae7-4f85-9753-b9310e21ad88',
        case_number: '2178',
        received_at: '2017-11-27T10:50:22.301Z',
        status: 'CLOSE'
      },
      {
        id: 'ae335934-d709-494a-a659-e7fa14bef466',
        case_number: '4764',
        received_at: '2017-11-27T11:00:35.081Z',
        status: 'CLOSE'
      },
      {
        id: '5a673eca-bafa-4a1b-b174-c57d932140a1',
        case_number: '1001',
        received_at: '2017-11-27T10:51:59.794Z',
        status: 'CLOSE'
      },
    ];
  }

}

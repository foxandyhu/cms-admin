import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-flow-table',
  templateUrl: './table.component.html',
})
export class FlowTableComponent implements OnInit {

  ngOnInit() {
  }

  private data: any;

  setData(data: any) {
    this.data = data;
  }
}

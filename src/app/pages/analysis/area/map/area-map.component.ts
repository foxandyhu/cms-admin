import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'ngx-area-map',
  template: `
    <div echarts [options]="options"></div>
  `,
})
export class AreaMapComponent implements OnDestroy, OnInit {

  constructor(private http: HttpClient) {
  }

  options = {};

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.http.get('assets/map/china.json')
      .subscribe(geoJson => {
        echarts.registerMap('china', geoJson);
        this.options = {
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (p / km2)',
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'bottom',
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {},
            },
          },
          visualMap: {
            min: 800,
            max: 50000,
            text: ['高', '低'],
            realtime: false,
            calculable: true,
            inRange: {
              color: ['lightskyblue', 'yellow', 'orangered'],
            },
          },
          series: [
            {
              type: 'map',
              mapType: 'china',
              itemStyle: {
                normal: {label: {show: true}},
                emphasis: {label: {show: true}},
              },
              data: [],
            },
          ],
        };
      });
  }
}

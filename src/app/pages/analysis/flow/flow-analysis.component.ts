import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'ngx-flow-analysis',
  templateUrl: './flow-analysis.component.html',
})
export class FlowAnalysisComponent implements OnInit, AfterViewInit, OnDestroy {

  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: echarts.tooltipBackgroundColor,
            },
          },
        },
        legend: {
          data: ['PV', 'IP', '独立访客'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'PV',
            type: 'line',
            stack: 'Total amount',
            areaStyle: {normal: {opacity: echarts.areaOpacity}},
            data: [120, 132, 101, 111, 455, 333, 66],
          },
          {
            name: 'IP',
            type: 'line',
            stack: 'Total amount',
            areaStyle: {normal: {opacity: echarts.areaOpacity}},
            data: [220, 182, 191, 45, 213, 456, 221],
          },
          {
            name: '独立访客',
            type: 'line',
            stack: 'Total amount',
            areaStyle: {normal: {opacity: echarts.areaOpacity}},
            data: [150, 232, 201, 111, 345, 657, 767],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}

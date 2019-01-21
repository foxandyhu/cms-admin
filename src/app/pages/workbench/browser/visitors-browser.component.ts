import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'ngx-visitors-browser',
  template: `
    <nb-card>
      <nb-card-header>浏览器</nb-card-header>
      <nb-card-body>
        <div echarts [options]="options" class="echart"></div>
      </nb-card-body>
    </nb-card>
  `,
})
export class VisitorsBrowserComponent implements AfterViewInit, OnDestroy {

  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '搜索引擎', '外部链接', '其他'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: '浏览器',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              {value: 135, name: '360'},
              {value: 210, name: 'IE8'},
              {value: 335, name: 'Chrome'},
              {value: 548, name: 'QQ'},
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

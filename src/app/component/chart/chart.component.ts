import { Component, OnInit, Input } from '@angular/core';
import {ProjectData} from '../../model/projectdata';


@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class Chart {
    @Input() graphData : any[];
  
    view: any[] = [700, 400];
  
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Year';
    showYAxisLabel = true;
    yAxisLabel = 'Value';
  
    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
  
    // line, area
    autoScale = true;
    
    constructor() {
        let temp = this.graphData;
        Object.assign(this, {temp});
    }
    
    onSelect(event) {
      console.log(event);
    }
}

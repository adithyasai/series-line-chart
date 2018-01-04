import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {GraphDashboardService} from '../app/service/graph.service';
import {Chart} from '../app/component/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    Chart
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [GraphDashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

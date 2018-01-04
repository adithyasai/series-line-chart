import { Component, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import {GraphDashboardService} from '../app/service/graph.service'

import {ProjectData} from '../app/model/projectdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Line Chart';
  graphData: ProjectData[] = [];
  isValidFile: boolean = true;
  @ViewChild("fileInput") fileInput;

  constructor(private graphDashboardService: GraphDashboardService){
  }

  addFile(): void {
    debugger;
    if(this.fileInput.nativeElement && this.fileInput.nativeElement.files){
      if(this.isFileInCsvFormat(this.fileInput.nativeElement.files[0].name)){
      this.graphDashboardService.getFormatedData(this.fileInput.nativeElement.files[0]).subscribe(data => this.graphData = data);          
      }
    }
  }

  private isFileInCsvFormat(fileName: string): boolean{
    let splittedFile = fileName.split(".");
    if(splittedFile.length >= 2 && splittedFile[splittedFile.length - 1] == "csv"){
      this.isValidFile = true;
      return true;
    }
    else{
      this.isValidFile = false;
      return false;
    }
  }
}

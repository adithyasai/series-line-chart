import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import {ProjectData} from '../model/projectdata';
import {GraphObject} from '../model/graphobject';


@Injectable()
export class GraphDashboardService{
    textResult : string;
    formatedResult : ProjectData[] = [];

    constructor() {
    }

    public getFormatedData(file: any): Observable<ProjectData[]>{
        this.readFileData(file);
        debugger;
        return of(this.formatedResult);        
    }

    public readFileData(file: any): void{
        let fileReader = new FileReader();
        debugger;
        fileReader.readAsText(file);        
        fileReader.onload = (event: Event) => {
            this.formatData(fileReader.result);
        };
    }

    public formatData(data: string): void{
        let rows = data.split("\n");
        rows.forEach(rowItem => {
            let rowColumns = rowItem.split(",");
            let projectData = new ProjectData(rowColumns[0], []);
            for(let i = 1; i < rowColumns.length; i++){
                let objectData = rowColumns[i].split("|");
                let graphobject = new GraphObject(objectData[0], Number(objectData[1]));
                projectData.series.push(graphobject);
            }
            debugger;
            projectData.series = projectData.series.sort((n1,n2) => Number(n1.name) - Number(n2.name));
            this.formatedResult.push(projectData);
        });
        this.formatedResult;
    }
}
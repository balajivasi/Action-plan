import { Component, OnInit } from '@angular/core';
import { ReportDataService } from '../report-data.service';

@Component({
  selector: 'app-school-reports',
  templateUrl: './school-reports.component.html',
  styleUrls: ['./school-reports.component.css']
})
export class SchoolReportsComponent implements OnInit {
  public report:any;
  public pageID:string;
  constructor(private _ReportDataService:ReportDataService) { }

  ngOnInit() {
    
    this.pageID=this. getUrlParameter('ID')
    this.getReportData();
  }
  getReportData(){
    this._ReportDataService.getReportsService(this.pageID)
                      .subscribe((respoce)=>this.report = respoce[0])
  }

  getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

}

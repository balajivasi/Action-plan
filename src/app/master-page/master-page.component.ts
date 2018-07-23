import { Component, OnInit } from '@angular/core';
import { ReportDataService } from '../report-data.service';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {
  public report:any;
  public pageID:string;
  public existsOn:boolean;
  public existsOff:boolean;
  constructor(private _ReportDataService:ReportDataService) { }

  ngOnInit() {
    
    this.pageID=this. getUrlParameter('ID')
    this.getReportData();

    
  }
  getReportData(){
    this._ReportDataService.getReportsService(this.pageID)
                      .subscribe((respoce)=>{
                        this.report = respoce[0];
                        
                         Object.keys(respoce[0]).forEach((key) => {
                           if (respoce[0][key] === 'On') {
                            this.existsOn=true;
                           }
                        });
                        console.log(this.existsOn)
                        Object.keys(respoce[0]).forEach((key) => {
                          if (respoce[0][key] === 'Off') {
                           this.existsOff=true;
                         }
                       });

                      }
                      );

    
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
  }

}

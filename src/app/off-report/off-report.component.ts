import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-off-report',
  templateUrl: './off-report.component.html',
  styleUrls: ['./off-report.component.css']
})
export class OffReportComponent implements OnInit {
  @Input() type:string;
  @Input() title:string;
  @Input() background:string;
  constructor() { }

  ngOnInit() {
  }

}

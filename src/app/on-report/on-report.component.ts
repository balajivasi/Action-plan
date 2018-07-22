import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-on-report',
  templateUrl: './on-report.component.html',
  styleUrls: ['./on-report.component.css']
})
export class OnReportComponent implements OnInit {
  @Input() type:string;
  @Input() title:string;
  @Input() background:string;
  constructor() { }

  ngOnInit() {
  }

}

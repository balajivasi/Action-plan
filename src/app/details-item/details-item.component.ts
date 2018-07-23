import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.css']
})
export class DetailsItemComponent implements OnInit {
 @Input() type:string;
 @Input() title:string;
 @Input() circletype:string;
 @Input() background:string;

  constructor() { }

  ngOnInit() {
  }

}

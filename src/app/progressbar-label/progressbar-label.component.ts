import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar-label',
  templateUrl: './progressbar-label.component.html',
  styleUrls: ['./progressbar-label.component.css']
})
export class ProgressbarLabelComponent implements OnInit {

  width:any;

  constructor() { }

  ngOnInit() {
    this.width=45;
  }

}

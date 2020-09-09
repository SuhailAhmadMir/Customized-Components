import { Component, OnInit, Input } from '@angular/core';
import { headersToString } from '../../../../node_modules/@types/selenium-webdriver/http';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  @Input() header
  @Input() lines
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.header, this.lines);
  }

}

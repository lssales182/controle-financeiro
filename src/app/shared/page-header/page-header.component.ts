import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input('page-title') pageTitle: string;
  @Input('button-text') buttonText: string;
  @Input('button-link') buttonLink: string;
  @Input('button-class') buttonClass: string;
  @Input('button-icon') buttonIcon: string;
  @Input('show-button') showButton: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

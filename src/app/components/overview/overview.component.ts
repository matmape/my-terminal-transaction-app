import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  overview:any={};
  constructor() { }

  ngOnInit(): void {
    this.overview.transactionVolume=109323232;
    this.overview.userCount=4576;
    this.overview.stockCount=684;
    this.overview.withdrawalCount=898;
  }

}

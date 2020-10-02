import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SummaryData } from 'src/app/Models/summaryData.model';
import { httpService } from 'src/app/Services/httpService';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private httpService: httpService) { }

  ngOnInit(): void {
   this.httpSubscription = this.httpService.getData('https://corona.lmao.ninja/v2/all').subscribe( (data: SummaryData) => {
   this.summaryData = data;  
   this.dataRecieved = true;
   })
  }
  
  //Properties
  summaryData: SummaryData
  httpSubscription: Subscription
  dataRecieved: boolean = false
}

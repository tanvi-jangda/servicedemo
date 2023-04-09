import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batchlist-withservice',
  templateUrl: './batchlist-withservice.component.html',
  styleUrls: ['./batchlist-withservice.component.css']
})
export class BatchlistWithserviceComponent implements OnInit{
public batches:any=[];
  constructor(public bObj:BatchService){
}
ngOnInit()
{
this.batches = this.bObj.getBatchDetails();
}
}

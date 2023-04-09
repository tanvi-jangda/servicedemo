import { Component,OnInit } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batchdetails-withservice',
  templateUrl: './batchdetails-withservice.component.html',
  styleUrls: ['./batchdetails-withservice.component.css']
})
export class BatchdetailsWithserviceComponent implements OnInit {
  public batches:any=[];
  constructor(public bObj: BatchService){
  }
  ngOnInit()
  {
    this.batches=this.bObj.getBatchDetails();
  }
}

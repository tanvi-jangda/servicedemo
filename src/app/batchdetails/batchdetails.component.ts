import { Component } from '@angular/core';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent {
public batchDetails=[
  {"Name":"Python","Duration":"1 months","Fees":20000},
  {"Name":"LB","Duration":"3 months","Fees":30000},
  {"Name":"MEAN","Duration":"5 months","Fees":50000},
  {"Name":"PPA","Duration":"4 months","Fees":40000},
];

}

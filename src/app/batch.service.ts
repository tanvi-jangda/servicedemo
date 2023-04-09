import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  //define functionality here
  public getBatchDetails()
  {
    var batchDetails = [
    {"Name":"Python","Duration":"1 months","Fees":20000},
    {"Name":"LB","Duration":"3 months","Fees":30000},
    {"Name":"MEAN","Duration":"5 months","Fees":50000},
    {"Name":"PPA","Duration":"4 months","Fees":40000},
  ];
    return batchDetails;
  }
  constructor() { }
}

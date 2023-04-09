import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchdetailsWithserviceComponent } from './batchdetails-withservice/batchdetails-withservice.component';
import { BatchlistWithserviceComponent } from './batchlist-withservice/batchlist-withservice.component';
import { BatchService } from './batch.service';


@NgModule({
  declarations: [
    AppComponent,
    BatchlistComponent,
    BatchdetailsComponent,
    BatchdetailsWithserviceComponent,
    BatchlistWithserviceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

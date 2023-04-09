import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchdetailsWithserviceComponent } from './batchdetails-withservice.component';

describe('BatchdetailsWithserviceComponent', () => {
  let component: BatchdetailsWithserviceComponent;
  let fixture: ComponentFixture<BatchdetailsWithserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchdetailsWithserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchdetailsWithserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchlistWithserviceComponent } from './batchlist-withservice.component';

describe('BatchlistWithserviceComponent', () => {
  let component: BatchlistWithserviceComponent;
  let fixture: ComponentFixture<BatchlistWithserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchlistWithserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchlistWithserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

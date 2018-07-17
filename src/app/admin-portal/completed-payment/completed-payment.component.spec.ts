import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPaymentComponent } from './completed-payment.component';

describe('CompletedPaymentComponent', () => {
  let component: CompletedPaymentComponent;
  let fixture: ComponentFixture<CompletedPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

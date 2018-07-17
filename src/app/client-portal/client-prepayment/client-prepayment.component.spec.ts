import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPrepaymentComponent } from './client-prepayment.component';

describe('ClientPrepaymentComponent', () => {
  let component: ClientPrepaymentComponent;
  let fixture: ComponentFixture<ClientPrepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPrepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPrepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { BillingService } from './shared/billing.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrls: ['./payment-request.component.css']
})
export class PaymentRequestComponent implements OnInit {


  constructor(public billingService: BillingService) { }

  ngOnInit() {
  }

  addRow(index){
    this.billingService.addNewItem();
  }

  removeRow(index){
    if(index == this.billingService.billingArray.length -1){
      alert('RERSET');
    }
    else{
      this.billingService.billingArray.splice(index,1);
    }
  }

  itemChange(item,index){
    this.billingService.changeItem(item,index);
  }

  changeOfQuantity(index){
    if(this.billingService.billingArray[index].itemId == "-1"){
      return;
    }
    this.billingService.changeOfQuantity(index);
  }

}

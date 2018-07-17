import { Injectable } from '@angular/core';
import { BillingModel } from './billing';
import { ItemModel } from './item';
import { ThrowStmt } from '@angular/compiler';



@Injectable()
export class BillingService {

  public billingArray=new Array<BillingModel>();
  public itemArray=new Array<ItemModel>();
  public mainBillingObj={
    items : this.billingArray,
    totalAmount: '00.00',
    gstType:'',
    grossTotal:'0',
    clientGST:'',
    clientAddress:'',
    stateSlno:''
  };

  constructor(public billing : BillingModel) {
    let itemModel=new ItemModel();
    itemModel.itemId="01";
    itemModel.itemName="ITR Gold";
    itemModel.itemAmount=5000;

    let itemModel2=new ItemModel();
    itemModel2.itemId="02";
    itemModel2.itemName="ITR Premium";
    itemModel2.itemAmount=10000;
    
    this.itemArray.push(itemModel);
    this.itemArray.push(itemModel2);

    //BILLING ARRAY
    let billiModel1=new BillingModel();
    this.billingArray.push(billiModel1);
    
  }


  addNewItem(){
    let billiModel1=new BillingModel();
    this.billingArray.push(billiModel1);
  }

  resetItem(index){
    this.billingArray[index]=this.billing;
  }

  changeItem(billngObj: BillingModel,index){
    if(billngObj.itemId == "-1"){
      this.billingArray[index].packageAmount=0;
    }
    for(let item of this.itemArray){
      if(item.itemId == billngObj.itemId){
        this.billingArray[index].packageAmount=item.itemAmount;
      }
    }
  }

  changeOfQuantity(index){
    this.billingArray[index].totalAmount=this.billingArray[index].packageAmount * this.billingArray[index].quantity;
    this.calculateTotalAmount();
  }


  calculateTotalAmount(){
    let totalAmount: number=0;
    for(let billingObj of this.billingArray){
      totalAmount=totalAmount+billingObj.totalAmount;
    }
    this.mainBillingObj.totalAmount=String(totalAmount);
  }




}

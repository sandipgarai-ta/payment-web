export class BillingModel{
    private _itemId: string="-1";
    private _details: string="";
    private _quantity: number=-1;
    private _packageAmount: number=0;
    private _totalAmount: number=0;

    get itemId(): string{
        return this._itemId;
    }
    set itemId(itemId: string){
        this._itemId=itemId;
    }

    get details(): string{
        return this._details;
    }
    set details(details: string){
        this._details=details;
    }

    get quantity(): number{
        return this._quantity;
    }
    set quantity(quantity: number){
        this._quantity=quantity;
    }

    get packageAmount(): number{
        return this._packageAmount;
    }
    set packageAmount(packageAmount: number){
        this._packageAmount=packageAmount;
    }

    get totalAmount(): number{
        return this._totalAmount;
    }
    set totalAmount(totalAmount: number){
        this._totalAmount=totalAmount;
    }
}
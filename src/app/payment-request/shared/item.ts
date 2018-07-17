export class ItemModel{
    private _itemId : string;
    private _itemName : string;
    private _itemAmount : number;


    get itemId() : string{
        return this._itemId;
    }
    set itemId(itemId : string){
        this._itemId=itemId;
    }

    get itemName() : string{
        return this._itemName;
    }
    set itemName(itemName : string){
        this._itemName=itemName;
    }

    get itemAmount() : number{
        return this._itemAmount;
    }
    set itemAmount(itemAmount : number){
        this._itemAmount=itemAmount;
    }

}
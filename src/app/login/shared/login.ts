export class LoginModel {

    private _loginId : string;
    private _loginPass : string;
    private _userId : string;

    constructor(){
        // this.loginId="";
        // this.loginPass="";
        // this.userId="";
    }

    get loginId() : string{
        return this._loginId;
    }
    set loginId(loginId : string){
        this._loginId=loginId;
    }


    get loginPass() : string{
        return this._loginPass;
    }
    set loginPass(loginPass : string){
        this._loginPass=loginPass;
    }


    get userId() : string{
        return this._userId;
    }
    set userId(userId : string){
        this._userId=userId;
    }
}

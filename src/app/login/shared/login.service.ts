import { Injectable } from '@angular/core';
import { LoginModel } from './login';

import { ApiService } from '../../services/api.service';
import {Observable} from 'rxjs';
import { LoaderService } from '../../services/loader.service';
//import 'rxjs/add/operator/map'


@Injectable()
export class LoginService {

  constructor(public loginModel: LoginModel, 
              public api: ApiService,
              public loader: LoaderService
            ) { }


  validateUser(){
    console.log('Validate user');
    this.loader.display(true);
    this.api.postRequest('/master/fetchall',this.loginModel)
    .subscribe((res :LoginModel )=>{
      this.loginModel=res;
      this.loader.display(false);
    })
  };
    
}

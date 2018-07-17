import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ClientPortalComponent } from './client-portal/client-portal.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { ClientPrepaymentComponent } from './client-portal/client-prepayment/client-prepayment.component';
import { PendingPaymentComponent } from './admin-portal/pending-payment/pending-payment.component';
import { CompletedPaymentComponent } from './admin-portal/completed-payment/completed-payment.component';
import { NavComponent } from './nav/nav.component';

import { ApiService } from './services/api.service';
import { LoaderService } from './services/loader.service';

import { BillingModel } from './payment-request/shared/billing';
import { BillingService } from '././payment-request/shared/billing.service';
import { LoginService } from './login/shared/login.service';
import { LoginModel } from './login/shared/login';
import { ItemModel } from './payment-request/shared/item';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPortalComponent,
    ClientPortalComponent,
    PaymentRequestComponent,
    ClientPrepaymentComponent,
    PendingPaymentComponent,
    CompletedPaymentComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    LoaderService,
    ApiService,
    LoginModel,
    LoginService,
    BillingModel,
    BillingService,
    ItemModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

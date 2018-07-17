import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ClientPortalComponent } from './client-portal/client-portal.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { ClientPrepaymentComponent } from './client-portal/client-prepayment/client-prepayment.component';
import { PendingPaymentComponent } from './admin-portal/pending-payment/pending-payment.component';
import { CompletedPaymentComponent } from './admin-portal/completed-payment/completed-payment.component';



const routes: Routes= [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'admin-portal',
    component: AdminPortalComponent
  },
  {
    path:'admin',
    children:[
      {
        path: 'payment-request',
        component: PaymentRequestComponent
      },
      {
        path:'pending-payment',
        component: PendingPaymentComponent
      },
      {
        path:'completed-payment',
        component: CompletedPaymentComponent
      },
      {
        path:'',
        redirectTo:'/admin-portal',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'client',
    children:[
      {
        path:'pre-payment/:paymentRequestId',
        component: ClientPrepaymentComponent
      },
      {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'client-portal',
    component: ClientPortalComponent
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'/login',
    pathMatch:'full'
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing:false} )
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

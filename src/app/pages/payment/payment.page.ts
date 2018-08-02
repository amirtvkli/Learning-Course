import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PaymentService } from '../../_services/payment.service';
import { SnackbarService } from '../../../../node_modules/ngx-snackbar';
import { NgxSpinnerService } from '../../../../node_modules/ngx-spinner';
declare var require: any;
@Component({
    selector: 'payment',
    templateUrl: './payment.page.html',
    styleUrls:['./payment.page.scss']
})

export class PaymentPage implements OnInit {
    queries;
    result;
    error;
    icon= require("assets/images/warning_icon.png");

    constructor(private router:ActivatedRoute,public paymentService:PaymentService,private snackbar:SnackbarService,private spinner: NgxSpinnerService) { }
    
    ngOnInit() { 
        this.spinner.show();
        this.queries=this.router.snapshot.queryParams;
        if(this.queries){
            
            this.paymentService.getPaymentStatus(this.queries.Authority)
            .subscribe(
                data=>{
                    this.result=data;
                    this.spinner.hide();
                }
                ,err=>{
                    this.error='تراکنش با خطا مواجه شد.';
                    this.spinner.hide();
                    this.snackbar.add({
                        msg: 'خطایی رخ داده است.',
                    background:'#da532c',
                    color: '#ffffff',
                    action: {
                        text: 'لطفا دوباره تلاش کنید..',
                        color: '#ffffff'
                    },
                    });
                }
            )
        }
    }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService,
    private form: FormBuilder
  ) { 
    this.items = this.cartService.getItems()  
    
    this.checkoutForm = this.form.group({ 
      namoo: "",
      addy: ""
    })
  }

  ngOnInit() {
    
  }

  onSubmit(consumerData) {
    console.warn("Your order has been processed", consumerData)
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  
  }

}
import { IProduct } from './../../Shared Classes & Types/IProduct';
import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-without-discount',
  templateUrl: './products-without-discount.component.html',
  styleUrls: ['./products-without-discount.component.scss']
})
export class ProductsWithoutDiscountComponent implements OnInit {
  products:IProduct[];
  constructor(private productService:ProductServiceService) {
    this.products =[];
   }

  ngOnInit(): void {
    this.prodNoDiscount();
  }
  prodNoDiscount(){
    let allProds = this.productService.getAllProducts()
    let discountProds = [];
    for(let item of allProds){
      if(item.discount == 'No Discount'){
        discountProds.push(item)
      }
    }
    this.products = discountProds;
    
  }

}

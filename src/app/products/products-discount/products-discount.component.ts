import { IProduct } from './../../Shared Classes & Types/IProduct';
import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-discount',
  templateUrl: './products-discount.component.html',
  styleUrls: ['./products-discount.component.scss']
})
export class ProductsDiscountComponent implements OnInit {
  discountedProduct:IProduct[];
  constructor(private productService:ProductServiceService) {
    this.discountedProduct =[]; 
   }
   prodDiscount(){
    let allProds = this.productService.getAllProducts()
    let discountProds = [];
    for(let item of allProds){
      if(item.discount != 'No Discount'){
        discountProds.push(item)
      }
    }
    this.discountedProduct = discountProds;
  }

  ngOnInit(): void {
    this.prodDiscount();
  }

}

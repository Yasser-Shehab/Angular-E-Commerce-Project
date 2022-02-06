import { IProduct } from './../Shared Classes & Types/IProduct';
import { ICategory } from './../Shared Classes & Types/ICategory';
import { DiscountOffers } from '../Shared Classes & Types/enums';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  storeName:string;
  storeLogo:string;
  productList:IProduct[];
  categoryList:ICategory[];
  clientName:string;
  isPurshased:boolean;
  msg = ""

  constructor(private productService:ProductServiceService,private router:Router, private route:ActivatedRoute) {
    this.storeName = "lorem ipsum";
    this.storeLogo = "../../assets/imgs/parrot.jpg";
    this.clientName = "Khaled"
    this.isPurshased = false;
    this.productList = [];
    this.categoryList = [
      {
        id:1,
        name:"Category1"
      },
      {
        id:2,
        name:"Category2"
      }
    ]
   
   }
  ngOnInit(): void {
    this.renderValues();
  }
  onClick(){
    this.isPurshased = !this.isPurshased;
    this.msg = `Thanks For Purchasing From Our Store ${this.clientName}`
  }
  renderValues(){
      this.productList = this.productService.getAllProducts();
  }
/*   prodDiscount(){
    let allProds = this.productService.getAllProducts()
    let discountProds = [];
    for(let item of allProds){
      if(item.discount != 'No Discount'){
        discountProds.push(item)
      }
    }
    this.productList = discountProds;
  } */
  
  showDiscount(){
    this.router.navigate(['productDiscount'], {relativeTo:this.route})
  }
  showNoDiscount(){
    this.router.navigate(['productsNoDiscount'], {relativeTo:this.route})
  }
  
  
}

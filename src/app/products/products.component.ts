import { IProduct } from './../Shared Classes & Types/IProduct';
import { ICategory } from './../Shared Classes & Types/ICategory';
import { DiscountOffers } from '../Shared Classes & Types/enums';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  discount:DiscountOffers;
  storeName:string;
  storeLogo:string;
  productList:IProduct[];
  categoryList:ICategory[];
  clientName:string;
  isPurshased:boolean;
  msg = ""

  constructor() {
    this.discount = DiscountOffers.tenPercent;
    this.storeName = "lorem ipsum";
    this.storeLogo = "../../assets/imgs/parrot.jpg";
    this.clientName = "Khaled"
    this.isPurshased = false;
    this.productList = [
      {
        id:1,
        name:"Samsung Galaxy A03s",
        quantity:10,
        price:25,
        img:"../../assets/imgs/Mobile1.jpg"
      },
      {
        id:1,
        name:"Xiaomi Redmi 10",
        quantity:5,
        price:50,
        img:"../../assets/imgs/Mobile2.jpg"
      },
      {
        id:1,
        name:"Samsung Galaxy A52s",
        quantity:7,
        price:60,
        img:"../../assets/imgs/Mobile3.jpg"
      }
    ]
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
  }
  onClick(){
    this.isPurshased = !this.isPurshased;
    this.msg = `Thanks For Purchasing From Our Store ${this.clientName}`
  }

}

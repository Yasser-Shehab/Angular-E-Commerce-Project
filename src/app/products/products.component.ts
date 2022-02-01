import { ICategory } from './../Shared Classes & Types/ICategory';
import { IProduct } from './../Shared Classes & Types/IProduct';
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

  constructor() {
    this.discount = DiscountOffers.tenPercent;
    this.storeName = "lorem ipsum";
    this.storeLogo = "../../assets/imgs/parrot.jpg";
    this.clientName = "Khaled"
    this.isPurshased = true;
    this.productList = [
      {
        id:1,
        name:"product1",
        quantity:10,
        price:25,
        img:"palceholder.jpg"
      },
      {
        id:1,
        name:"product2",
        quantity:5,
        price:50,
        img:"palceholder.jpg"
      },
      {
        id:1,
        name:"product3",
        quantity:7,
        price:60,
        img:"palceholder.jpg"
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
      },
    ]
   
   }
   

  ngOnInit(): void {
  }

}

import { DiscountOffers } from './../Shared Classes & Types/enums';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  getAllProducts(){
    return[
      {
        id:1,
        name:"Samsung Galaxy A03s",
        quantity:10,
        discount:DiscountOffers.NoDiscount,
        price:25,
        img:"../../assets/imgs/Mobile1.jpg"
      },
      {
        id:1,
        name:"Xiaomi Redmi 10",
        quantity:5,
        discount:DiscountOffers.tenPercent,
        price:50,
        img:"../../assets/imgs/Mobile2.jpg"
      },
      {
        id:1,
        name:"Samsung Galaxy A52s",
        quantity:7,
        discount:DiscountOffers.fifteenPercent,
        price:60,
        img:"../../assets/imgs/Mobile3.jpg"
      }
    ];
  }
  getProductById(prodId:number){
    let products = this.getAllProducts();
    for(let prod of products){
      if(prod.id == prodId){
        return prod
      };
    }
    return null;
  }
}

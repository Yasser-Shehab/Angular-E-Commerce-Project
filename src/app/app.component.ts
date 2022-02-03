import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myFirstApp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject';

  
  @ViewChild(ProductsComponent) productsComp!:ProductsComponent;

  renderPorducts(){
    this.productsComp.renderValues();
  }
}

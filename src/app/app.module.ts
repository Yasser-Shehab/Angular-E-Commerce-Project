import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductsDiscountComponent } from './products/products-discount/products-discount.component';
import { ProductsWithoutDiscountComponent } from './products/products-without-discount/products-without-discount.component';
import { PostPageComponent } from './posts/post-page/post-page.component';

const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch:'full'},
  /* {path:'products',component:ProductsComponent}, */
  {path:'home',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'postsDetail/:id',component:PostPageComponent},
  {path:'products',component:ProductsComponent,
    children:[
      {path:'productDiscount',component:ProductsDiscountComponent},
      {path:'productsNoDiscount',component:ProductsWithoutDiscountComponent}
    ]},
  {path: 'register',component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    FilterPipe,
    HighlightDirective,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    RegisterComponent,
    LoginComponent,
    ProductsDiscountComponent,
    ProductsWithoutDiscountComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

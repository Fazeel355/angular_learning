import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';



const routes: Routes = [
  {
    component:HomeComponent,
    path:"home"
    // children: [
    //   { path: 'shop', component: ShopComponent },
    //   // { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    //   { path: 'contact', component: ContactComponent },
    //   { path: 'blog', component: BlogComponent },
   
    // ]
  
  
},
{
  component:CartComponent,
  path: "cart"
},
  {
    component:ShopComponent,
    path:"shop"
  },
  {
    component:ProductComponent,
    path:"product"
  },

  {
    component:ContactComponent,
    path:"contact"
  },
  
  {
    component:BlogComponent,
    path:"blog"
  },

  {
    component:SignUpComponent,
    path:"signup" 
  },
  {
   path: "" , redirectTo:"login" , pathMatch:"full"
  },
  {
    component:LoginComponent,
    path:"login"
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
children: [
    { path: 'shop', component: ShopComponent }, 
    { path: 'contact', component: ContactComponent },
    { path: 'blog', component: BlogComponent },
 
  ]
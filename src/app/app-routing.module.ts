import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { ErrorComponent } from './error/error.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerAuthGuard } from './seller-auth.guard';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [SellerAuthGuard]
  },
  {
    path: 'seller-add-product',
    component: SellerAddProductComponent,
    canActivate: [SellerAuthGuard]
  },
  {
    path: '**',
    component: ErrorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

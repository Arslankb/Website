import { SellerService } from './services/seller.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthGuard implements CanActivate {

  constructor(private sellerService: SellerService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if (localStorage.getItem('seller')) {
        return true;
      }
      return this.sellerService.isSellerLoggedIn;

  }
  
}

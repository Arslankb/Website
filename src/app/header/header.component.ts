import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuType:string = 'default';
  sellerName:string = '';
  constructor(private route:Router){}

  ngOnInit(){
    
    this.route.events.subscribe((val:any) =>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.warn('Seller Area');
          this.menuType='seller';
          if(localStorage.getItem('seller')){
            let sellerStore=localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.email;
          }
        }
        else{
          this.menuType='default'
        }
      }
    })
  }

  logout(){
  localStorage.removeItem('seller');
  this.route.navigate(['/']);  
  }

}
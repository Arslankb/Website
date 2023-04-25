import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  // Product Price
  actualPrice:number;
  discount:number;
  sellingPrice:number;
  updateSellingPrice(){
     this.actualPrice = parseInt((<HTMLInputElement>document.getElementById("actual-price")).value);
     this.discount = parseInt((<HTMLInputElement>document.getElementById("discount")).value);
     this.sellingPrice = this.actualPrice - (this.actualPrice * (this.discount /100));
     (<HTMLInputElement>document.getElementById("sell-price")).value = this.sellingPrice.toFixed(2);
  }

  // Uplaod Images

    imageUrl: string = "../assets/add-product/camera.png";
    fileUpload: File = null;
    onUploadImage(event: Event){
    const fileInput = event.target as HTMLInputElement;
    const file =  fileInput.files.item(0);

    if (file) {
      //Show Image Preview
      const reader = new FileReader();
      reader.onload = (event:any) =>{
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(file);
    }
}

 

}

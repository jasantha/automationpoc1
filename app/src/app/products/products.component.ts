import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl } from '@angular/forms';
import {ProductapiService} from './productapi.service';
import { product } from './product';
//UI_TESTS_TAGS:products
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private fb: FormBuilder,private productapiService:ProductapiService) { }

 
 products:product;
  ngOnInit() {

    this.productapiService.getProducts().subscribe((data => {this.products=data;console.log(this.products)}));;

  
  }

  productForm = this.fb.group({
    id:[''],
    name:[''],
    description:['']
   
 });

 onSubmit(){
  
  console.log(this.productForm.value);
  this.productapiService.addProduct(this.productForm.value,(data)=>{this.products=data;console.log(this.products)});
 // this.products.push(this.productForm.value);
}


}

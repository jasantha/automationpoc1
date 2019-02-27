import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public products = []
  ngOnInit() {
    this.products =  
    [
         { "id":"1", "name": "product 1", "description": "description1"},
         { "id":"2", "name": "product 1" , "description": "description2"},
         { "id":"3", "name": "product 1" , "description": "description3"},
         { "id":"4", "name": "product 1", "description": "description4" }
     ];
  }

  productForm = this.fb.group({
    id:[''],
    name:[''],
    description:['']
   
 });

 onSubmit(){
  
  console.log(this.productForm.value);
  this.products.push(this.productForm.value);
}


}

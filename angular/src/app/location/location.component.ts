import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl } from '@angular/forms';
import {LocationService} from './location.service';
import { location } from './location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private fb: FormBuilder,private locationService:LocationService) { }

  locations:location;

  ngOnInit() {
    this.locationService.getProductLocation().subscribe((data => {this.locations=data;console.log(this.locations)}));;

  }

  locationForm = this.fb.group({
    productid:[''],
    aisle:[''],
    bay:['']
   
 });

 onSubmit(){
  
  console.log(this.locationForm.value);
  this.locationService.addProductLocation(this.locationForm.value,(data)=>{this.locations=data;console.log(this.locations)});
 // this.products.push(this.productForm.value);
}

}

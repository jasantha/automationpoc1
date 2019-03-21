import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl } from '@angular/forms';
import { store } from './store';
import {StoreapiService} from './storeapi.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private fb: FormBuilder,private storeapiService:StoreapiService) { }

  stores:store;

  ngOnInit() {

    this.storeapiService.getStores().subscribe((data => {this.stores=data;console.log(this.stores)}));;
   
  
  }

  storeForm = this.fb.group({
    storeNumber:[''],
    storeName:[''],
    city:[''],
    state:['']
 });


 onSubmit(){
  
    console.log(this.storeForm.value);
    this.storeapiService.addStore(this.storeForm.value,(data)=>{this.stores=data;console.log(this.stores)});
    //this.stores.push(this.storeForm.value);
  }


}

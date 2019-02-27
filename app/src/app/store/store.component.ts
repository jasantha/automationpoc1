import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl } from '@angular/forms';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public stores = []
  public columns=[];
  ngOnInit() {

    this.stores =  
     [
          { "storeNumber":"1", "storeName": "Store Name1", "city": "Mooresville", "state": "NC" },
          { "storeNumber":"2", "storeName": "Store Name2" , "city": "Boston", "state": "MA"},
          { "storeNumber":"3", "storeName": "Store Name3" , "city": "San Franciso", "state": "CA"},
          { "storeNumber":"4", "storeName": "Store Name4", "city": "Tampa", "state": "FL" }
      ];
  
  }

  storeForm = this.fb.group({
    storeNumber:[''],
    storeName:[''],
    city:[''],
    state:['']
 });


 onSubmit(){
  
    console.log(this.storeForm.value);
    this.stores.push(this.storeForm.value);
  }


}

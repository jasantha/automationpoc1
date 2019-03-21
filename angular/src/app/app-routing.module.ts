import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './products/products.component';
import {LocationComponent} from './location/location.component'
const routes: Routes = [
  { path: '', redirectTo: '/stores', pathMatch: 'full'},    
  { path: 'stores', component: StoreComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'productlocation', component: LocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {SubCategoriesComponent} from './sub-categories/sub-categories.component';
import {ProductsComponent} from './products/products.component';
import {SalesComponent} from './sales/sales.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import {AllProductComponent} from './all-product/all-product.component';
import {ProductUpdateComponent} from './product-update/product-update.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'search/:search_request', component: SearchResultsComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'categories/:category_id', component: SubCategoriesComponent},
  {path: 'categories/:category_id/:subcategory_id', component: ProductsComponent},
  {path: 'categories/:category_id/:subcategory_id/:product_id', component: ProductDetailComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'products', component: AllProductComponent},
  {path:  'products/:product_id', component: ProductDetailComponent},
  {path:  'products/:product_id/update', component: ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

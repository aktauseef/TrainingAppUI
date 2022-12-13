import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuardGuard } from '../product-detail-guard/product-detail-guard.guard';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

console.warn('product module loaded');
@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule, // sharedModule imported to use its directive,pipe in current productModule
    RouterModule.forChild([
      //forChild used bcoz this module will be inherited by AppModule
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuardGuard], //using canActivate guard to prevent navigating if id<1 or not a number
        component: ProductDetailComponent,
      },
    ]),
  ],
  exports: [
    //Exporting directive,component,pipe to be accessed by other module
    ProductListComponent,
    ProductDetailComponent,
  ],
})
export class ProductModule {}

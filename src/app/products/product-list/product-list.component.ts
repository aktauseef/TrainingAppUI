import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  imageWidth: number = 50;
  imageMargin: number = 2;
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  sub!: Subscription;
  private _listFilter: string = '';
  errorMessage: any;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In Setter:', value);
    this.filteredProducts = this.performFilter(value);
  }
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log('In ngOnInit');
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterby: string): IProduct[] {
    filterby = filterby.toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterby)
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product list: ' + message;
  }
}

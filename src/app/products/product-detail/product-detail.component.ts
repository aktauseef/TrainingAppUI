import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product-list/product';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.LoadProduct();
  }

  LoadProduct() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this._productService.getProducts().subscribe((products) => {
      this.product = products.filter((product) => product.productId == id)[0];
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}

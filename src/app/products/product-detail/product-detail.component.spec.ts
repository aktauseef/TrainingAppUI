import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { ProductService } from '../product-service/product.service';
import { IProduct } from '../product-list/product';
import { ProductDetailComponent } from './product-detail.component';

export class MockDataClass {
  productData: IProduct | undefined;
  static productServiceData(): IProduct[] {
    return [
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2021',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 3,
        imageUrl: 'assets/images/garden_cart.png',
      },
      {
        productId: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2021',
        description: 'Curved claw steel hammer',
        price: 8.9,
        starRating: 4.2,
        imageUrl: 'assets/images/hammer.png',
      },
      {
        productId: 3,
        productName: 'The Ministry of Truth',
        productCode: 'Book-05478',
        releaseDate: 'March 23, 2021',
        description: 'Its an amazing book',
        price: 88.99,
        starRating: 3.2,
        imageUrl: 'assets/images/the_ministry_of_truth.jpg',
      },
      {
        productId: 4,
        productName: 'Harry Potter',
        productCode: 'Book-05968',
        releaseDate: 'March 23, 2010',
        description: 'Book about harry potter the great magician',
        price: 50.99,
        starRating: 5.0,
        imageUrl: 'assets/images/harry_potter.jpg',
      },
    ];
  }

  static productResult(): IProduct {
    return {
      //matching exact data after filtering
      productId: 3,
      productName: 'The Ministry of Truth',
      productCode: 'Book-05478',
      releaseDate: 'March 23, 2021',
      description: 'Its an amazing book',
      price: 88.99,
      starRating: 3.2,
      imageUrl: 'assets/images/the_ministry_of_truth.jpg',
    };
  }
}

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailComponent],
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(): string {
                  return '3';
                },
              },
            },
          },
        },
        ProductService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter product with particular route param id', () => {
    //create service data to be return
    let productServiceSpy = fixture.debugElement.injector.get(ProductService); //create spy for ProductService Class
    const getProductDataResponse = new Observable<IProduct[]>((observer) => {
      //create observable to return data from product service
      observer.next(MockDataClass.productServiceData());
    });
    spyOn(productServiceSpy, 'getProducts').and.returnValue(
      getProductDataResponse
    ); //spyon getproducts() will return observable response
    component.LoadProduct();
    expect(component.product).toEqual(MockDataClass.productResult());
  });
});

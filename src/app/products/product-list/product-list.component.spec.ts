import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from '../product-service/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductListComponent } from './product-list.component';
import { By } from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ProductService],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return filtered products', () => {
    let products: any[] = [
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
    ];
    component.products = products;
    let results = component.performFilter('cart');
    expect(results.length).toEqual(1);
  });

  it('should show image on show button click', () => {
    component.products.length = 5;
    fixture.detectChanges();
    spyOn(component, 'toggleImage').and.callThrough();
    const toggleButton = fixture.debugElement.query(By.css('.btn'));
    toggleButton.triggerEventHandler('click', null);
    expect(component.toggleImage).toHaveBeenCalled();
  });
});

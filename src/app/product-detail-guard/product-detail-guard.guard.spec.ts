import { TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  convertToParamMap,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductDetailGuardGuard } from './product-detail-guard.guard';

describe('ProductDetailGuardGuard', () => {
  let guard: ProductDetailGuardGuard;
  let route: ActivatedRoute;
  let routerMock = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({ id: '*' }) } },
        },
        { provide: Router, useValue: routerMock },
      ],
    });
    guard = TestBed.inject(ProductDetailGuardGuard);
    route = TestBed.inject(ActivatedRoute);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should navigates to the product page', () => {
    guard.canActivate(route.snapshot);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/products']);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDiscountComponent } from './products-discount.component';

describe('ProductsDiscountComponent', () => {
  let component: ProductsDiscountComponent;
  let fixture: ComponentFixture<ProductsDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

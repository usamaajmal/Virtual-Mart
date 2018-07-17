import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperProductsComponent } from './shopkeeper-products.component';

describe('ShopkeeperProductsComponent', () => {
  let component: ShopkeeperProductsComponent;
  let fixture: ComponentFixture<ShopkeeperProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopkeeperProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

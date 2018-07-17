import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperOrdersComponent } from './shopkeeper-orders.component';

describe('ShopkeeperOrdersComponent', () => {
  let component: ShopkeeperOrdersComponent;
  let fixture: ComponentFixture<ShopkeeperOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopkeeperOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

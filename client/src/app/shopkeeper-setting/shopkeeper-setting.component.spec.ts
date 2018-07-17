import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeeperSettingComponent } from './shopkeeper-setting.component';

describe('ShopkeeperSettingComponent', () => {
  let component: ShopkeeperSettingComponent;
  let fixture: ComponentFixture<ShopkeeperSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopkeeperSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeeperSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

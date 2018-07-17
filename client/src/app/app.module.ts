import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CustomerPaymentComponent } from './customer-payment/customer-payment.component';
import { CustomerSettingComponent } from './customer-setting/customer-setting.component';
import { ShopkeeperDashboardComponent } from './shopkeeper-dashboard/shopkeeper-dashboard.component';
import { ShopkeeperProductsComponent } from './shopkeeper-products/shopkeeper-products.component';
import { ShopkeeperSalesComponent } from './shopkeeper-sales/shopkeeper-sales.component';
import { ShopkeeperOrdersComponent } from './shopkeeper-orders/shopkeeper-orders.component';
import { ShopkeeperSettingComponent } from './shopkeeper-setting/shopkeeper-setting.component';
import { LoginComponent } from './login/login.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterShopkeeperComponent } from './register-shopkeeper/register-shopkeeper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    WishlistComponent,
    CartComponent,
    CustomerDashboardComponent,
    CustomerOrderComponent,
    CustomerPaymentComponent,
    CustomerSettingComponent,
    ShopkeeperDashboardComponent,
    ShopkeeperProductsComponent,
    ShopkeeperSalesComponent,
    ShopkeeperOrdersComponent,
    ShopkeeperSettingComponent,
    LoginComponent,
    RegisterCustomerComponent,
    RegisterShopkeeperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FeaturesComponent } from './features/customer/features.component';
//import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './features/customer/add-customer/add-customer.component';
import { GetCustomerComponent } from './features/customer/get-customer/get-customer.component';
import { NavbarComponent } from './core/components/navbar/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditcustomerComponent } from './features/customer/editcustomer/editcustomer.component';
import { GetOneCustomerComponent } from './features/customer/get-one-customer/get-one-customer.component';
import { GetHotelComponent } from './features/hotel/get-hotel/get-hotel.component';
import { EditHotelComponent } from './features/hotel/edit-hotel/edit-hotel.component';
import { AddHotelComponent } from './features/hotel/add-hotel/add-hotel.component';
import { AddPackageComponent } from './features/packages/add-package/add-package.component';
import { EditpackageComponent } from './features/packages/editpackage/editpackage.component';
import { GetPackageComponent } from './features/packages/get-package/get-package.component';
import { DeleteCustomerComponent } from './features/customer/delete-customer/delete-customer.component';
import { DeleteHotelComponent } from './features/hotel/delete-hotel/delete-hotel.component';
import { DetailsHotelComponent } from './features/hotel/details-hotel/details-hotel.component';
import { DetailsPackageComponent } from './features/packages/details-package/details-package.component';
import { DeletePackageComponent } from './features/packages/delete-package/delete-package.component';
import { GetBookingComponent } from './features/booking/get-booking/get-booking.component';
import { AddBookingComponent } from './features/booking/add-booking/add-booking.component';
import { EditBookingComponent } from './features/booking/edit-booking/edit-booking.component';
import { DetailsBookingComponent } from './features/booking/details-booking/details-booking.component';
import { DeleteBookingComponent } from './features/booking/delete-booking/delete-booking.component';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { AboutusComponent } from './core/components/aboutus/aboutus.component';
import { ContactusComponent } from './core/components/contactus/contactus.component';
import { RegisterComponent } from './core/components/register/register.component';
import { CrudNavComponent } from './core/components/crud-nav/crud-nav.component';
import { LoginComponent } from './core/components/login/login.component';
//import { AdminloginComponent } from './core/components/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './core/components/adminregister/adminregister.component';
import { AdminloginComponent } from './core/components/adminlogin/adminlogin.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './core/components/nav/nav.component';
import { NavadminComponent } from './core/components/navadmin/navadmin.component';
import { CustomerpageComponent } from './core/components/customerpage/customerpage.component';
import { CustomerComponent } from './features/packages/customer/customer.component';
import { ComponentsComponent } from './src/app/core/components/components.component';
import { NavcustComponent } from './core/components/navcust/navcust.component';
import { HotelComponent } from './core/components/src/app/features/hotel/hotel.component';
import { HotelcustomerComponent } from './core/components/src/app/features/hotel/hotelcustomer/hotelcustomer.component';
import { CuhoComponent } from './features/hotel/cuho/cuho.component';



@NgModule({
  declarations: [
    AppComponent,
    // FeaturesComponent,
    // CustomerComponent,
    AddCustomerComponent,
    GetCustomerComponent,
    NavbarComponent,
    EditcustomerComponent,
    GetOneCustomerComponent,
    GetHotelComponent,
    EditHotelComponent,
    AddHotelComponent,
    AddPackageComponent,
    EditpackageComponent,
    GetPackageComponent,
    DeleteCustomerComponent,
    DeleteHotelComponent,
    DetailsHotelComponent,
    DetailsPackageComponent,
    DeletePackageComponent,
    GetBookingComponent,
    AddBookingComponent,
    EditBookingComponent,
    DetailsBookingComponent,
    DeleteBookingComponent,
    HomepageComponent,
    AboutusComponent,
    ContactusComponent,
    RegisterComponent,
    CrudNavComponent,
    LoginComponent,
    AdminloginComponent,
    AdminregisterComponent,
    NavComponent,
    NavadminComponent,
    NavcustComponent,
    CustomerpageComponent,
    CustomerComponent,
    ComponentsComponent,
    NavcustComponent,
    HotelComponent,
    HotelcustomerComponent,
    CuhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

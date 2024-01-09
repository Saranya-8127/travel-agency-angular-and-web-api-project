import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetCustomerComponent } from './features/customer/get-customer/get-customer.component';
import { AddCustomerComponent } from './features/customer/add-customer/add-customer.component';
import { EditcustomerComponent } from './features/customer/editcustomer/editcustomer.component';
import { GetOneCustomerComponent } from './features/customer/get-one-customer/get-one-customer.component';
import { AddHotelComponent } from './features/hotel/add-hotel/add-hotel.component';
import { GetHotelComponent } from './features/hotel/get-hotel/get-hotel.component';
import { EditHotelComponent } from './features/hotel/edit-hotel/edit-hotel.component';
import { GetPackageComponent } from './features/packages/get-package/get-package.component';
import { AddPackageComponent } from './features/packages/add-package/add-package.component';
import { EditpackageComponent } from './features/packages/editpackage/editpackage.component';
import { DeleteCustomerComponent } from './features/customer/delete-customer/delete-customer.component';
import { DeleteHotelComponent } from './features/hotel/delete-hotel/delete-hotel.component';
import { DetailsHotelComponent } from './features/hotel/details-hotel/details-hotel.component';
import { DeletePackageComponent } from './features/packages/delete-package/delete-package.component';
import { DetailsPackageComponent } from './features/packages/details-package/details-package.component';
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
import { AdminloginComponent } from './core/components/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './core/components/adminregister/adminregister.component';
import { CustomerpageComponent } from './core/components/customerpage/customerpage.component';
import { CustomerComponent } from './features/packages/customer/customer.component';
import { CuhoComponent } from './features/hotel/cuho/cuho.component';
const routes: Routes = [
  {
    path: 'admin/get-customer',
    component: GetCustomerComponent
  },
  {
    path: 'admin/add-customer',
    component: AddCustomerComponent
  },
  {
    path: 'admin/editcustomer/:id',
    component: EditcustomerComponent
  },
  {
    path: 'admin/customer/:id',
    component: GetOneCustomerComponent
  },
  {
    path: 'admin/get-hotel',
    component: GetHotelComponent
  },
  {
    path: 'admin/add-hotel',
    component: AddHotelComponent
  },
  {
    path: 'admin/edithotel/:id',
    component: EditHotelComponent
  },
  {
    path:'admin/get-package',
    component: GetPackageComponent
  },
  {
    path:'admin/add-package',
    component:AddPackageComponent
  },
  {
    path:'admin/editpackage/:id',
    component:EditpackageComponent
  },
  {
    path:'admin/delete-customer/:id',
    component:DeleteCustomerComponent
  },
  {
    path:'admin/deletehotel/:id',
    component:DeleteHotelComponent
  },
  {
    path:'admin/detailshotel/:id',
    component:DetailsHotelComponent
  },
  {
    path:'admin/Deletepackage/:id',
    component:DeletePackageComponent
  },
  {
    path:'admin/tourpackage/:id',
    component:DetailsPackageComponent
  },
  {
    path:'admin/get-booking',
    component:GetBookingComponent
  },
  {
    path:'admin/add-Booking',
    component:AddBookingComponent
  },
  {
    path:'admin/editbooking/:id',
    component:EditBookingComponent
  },
  {
    path:'admin/getbybookingid/:id',
    component:DetailsBookingComponent
  },
  {
    path:'admin/delete-booking/:id',
    component:DeleteBookingComponent
  },
  {
    path:'', redirectTo:'/homepage', pathMatch:'full'
  },
  {
    path:"homepage",
    component:HomepageComponent
  },
  {
    path:"aboutus",
    component:AboutusComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'crud-nav',
    component:CrudNavComponent
  },
  {
    path:'register_btns',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'adminlogin',
    component: AdminloginComponent
  },
  {
    path:'adminregister',
    component: AdminregisterComponent
  },
  {
    path:'customerpage',
    component: CustomerpageComponent
  },
  {
    path:'customerpackage',
    component : CustomerComponent
  },
  {
    path:'cuho',
    component : CuhoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

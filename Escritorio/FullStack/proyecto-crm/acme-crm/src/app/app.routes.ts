import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { ProductComponent } from "./product/product.component"
import { NotFoundComponentComponent } from './notfoundpage/not-found-component/not-found-component.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children: [
    
        {
            path:'',
            component: DashboardComponent
        },
        {
            path: 'dashboard',
            redirectTo: '',
            pathMatch: 'full',
        },
        {
            path: 'customer',
            component: CustomerListComponent,
        },
        {
            path: 'customer/:id',
            component: CustomerDetailComponent,
        },
        {
            path: 'product',
            component: ProductComponent
        },
      ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        
            path: '**',
            component: NotFoundComponentComponent
    },

];

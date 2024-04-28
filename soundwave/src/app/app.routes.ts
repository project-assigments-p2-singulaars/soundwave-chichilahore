import { Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout/layout.component";
import { JoinComponent } from './join/join/join.component';
import { DiscoverComponent } from './discover/discover/discover.component';


export const routes: Routes = [
    { 
        path: '',
        component: LayoutComponent,
    }, 
    {        
        path: 'join',
        component: JoinComponent 
    },
    {   
        path: 'discover', 
        component: DiscoverComponent 
    }, 
    
]

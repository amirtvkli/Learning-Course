import { RouterModule, Routes } from '@angular/router';
import {HomePage} from './pages/index';


const routes: Routes = [
    {
        path: '', redirectTo: '/home',pathMatch: 'full'},
        { path: 'home', component: HomePage },
        { path: '**', component: HomePage }
    ];
    
    export const AppRouting = RouterModule.forRoot(routes);
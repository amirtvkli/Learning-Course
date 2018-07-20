import { RouterModule, Routes } from '@angular/router';
import {HomePage} from './pages/index';


const routes: Routes = [
    {
        path: '', component: HomePage}
        // { path: 'home', component: HomePage }
    ];
    
    export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
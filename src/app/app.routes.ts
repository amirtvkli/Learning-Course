import { RouterModule, Routes } from '@angular/router';
import {HomePage, RegisterPage} from './pages/index';


const routes: Routes = [
    { path: '', component: HomePage},
    { path:'register/:courseId',component:RegisterPage }
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
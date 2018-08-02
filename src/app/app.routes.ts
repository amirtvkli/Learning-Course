import { RouterModule, Routes } from '@angular/router';
import {HomePage, CoursePage, RulesPage, PaymentPage} from './pages';
import { LoginPage } from './pages/login/login.page';


const routes: Routes = [
    { path: '', component: HomePage},
    { path:'course/:courseId',component:CoursePage },
    {path:'rules',component:RulesPage},
    {path:'login',component:LoginPage},
    {path:'paymentcomplete',component:PaymentPage}
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
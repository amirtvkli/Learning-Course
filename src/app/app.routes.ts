import { RouterModule, Routes } from '@angular/router';
import {HomePage, RegisterPage, RulesPage} from './pages/index';
import { LoginPage } from './pages/login/login.page';


const routes: Routes = [
    { path: '', component: HomePage},
    { path:'register/:courseId',component:RegisterPage },
    {path:'rules',component:RulesPage},
    {path:'login',component:LoginPage}
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
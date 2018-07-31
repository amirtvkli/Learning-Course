import { RouterModule, Routes } from '@angular/router';
import {HomePage, CoursePage, RulesPage} from './pages';
import { LoginPage } from './pages/login/login.page';


const routes: Routes = [
    { path: '', component: HomePage},
    { path:'course/:courseId',component:CoursePage },
    {path:'rules',component:RulesPage},
    {path:'login',component:LoginPage}
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
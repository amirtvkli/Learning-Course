import { RouterModule, Routes } from '@angular/router';
import {HomePage, RegisterPage, RulesPage} from './pages/index';


const routes: Routes = [
    { path: '', component: HomePage},
    { path:'register/:courseId',component:RegisterPage },
    {path:'rules',component:RulesPage}
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
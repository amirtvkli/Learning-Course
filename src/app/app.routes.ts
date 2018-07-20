import { RouterModule, Routes } from '@angular/router';
import {HomePage, CoursePage, RegisterPage} from './pages/index';


const routes: Routes = [
    { path: '', component: HomePage},
    { path:'register/:courseId',component:RegisterPage },
    { path: 'course/:courseId', component: CoursePage }
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
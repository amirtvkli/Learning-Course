import { RouterModule, Routes } from '@angular/router';
import {HomePage, CoursePage} from './pages/index';


const routes: Routes = [
    { path: '', component: HomePage},
    { path: 'course/:courseId', component: CoursePage }
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
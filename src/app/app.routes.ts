import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';

export const routes: Routes = [
    {path: '', component: Landing},
    {path: 'reserve-performance', loadComponent: ()=>import("./pages/reserve-performance/reserve-performance").then(m=>m.ReservePerformance)},
    {path: 'payment', loadComponent: ()=>import("./pages/payment/payment").then(m=>m.Payment)},
    {path: '**', redirectTo:'/', pathMatch:'full'}
];

import { Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',//TODO (Private)
        component: HomePageComponent,
        //loadChildren: () => import(`./modules/home/pages/home-page/home-page.component`).then(c => c.HomePageComponent),
        //canActivate: [SessionGuard]
    }
];

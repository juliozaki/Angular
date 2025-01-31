import { Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';

export const routes: Routes = [
    {
        path: '',
        //lazyload carga pereceso de un componente
        loadComponent: () => import(`./modules/home/pages/home-page/home-page.component`).then(c => c.HomePageComponent),
        children: [
            {
                path: 'tracks',
                loadComponent: () => import('@modules/tracks/pages/tracks-page/tracks-page.component').then(c => c.TracksPageComponent)
            },
            {
                path: 'favorites',
                loadComponent: () => import('@modules/favorites/pages/favorites-page/favorites-page.component').then(c => c.FavoritePageComponent)
            },
            {
                path: 'history',
                loadComponent: () => import('@modules/history/pages/history-page/history-page.component').then(c => c.HistoryPageComponent)
            }
        ],
        canActivate: [SessionGuard]
    },
    {
        path: 'auth/login',//TODO http://localhost:4200/auth/login
        loadComponent: () => import(`./modules/auth/pages/auth-page/auth-page.component`).then(c => c.AuthPageComponent)
    },
    {
        path: 'auth',
        redirectTo: 'auth/login'
    },
    {
        path: '**',
        redirectTo: 'tracks'
    }
];

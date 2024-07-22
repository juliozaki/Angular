import { Routes } from '@angular/router';

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
            }
        ]
        //canActivate: [SessionGuard]
    }
];

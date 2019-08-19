import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate: [ AuthGuard ]
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule), canActivate: [ AuthGuard ]
  },
  {
    path: 'cupones',
    loadChildren: () => import('./cupones/cupones.module').then(m => m.CuponesPageModule), canActivate: [ AuthGuard ]
  },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './auth/registro/registro.module#RegistroPageModule' },
  { path: 'miscupones', loadChildren: './miscupones/miscupones.module#MiscuponesPageModule', canActivate: [ AuthGuard ] },
  { path: 'tratamientos/:id', loadChildren: './tratamientos/tratamientos.module#TratamientosPageModule', canActivate: [ AuthGuard ] },
  { path: 'ubicacion', loadChildren: './home/home.module#HomePageModule', canActivate: [ AuthGuard ] },
  { path: 'salir', loadChildren: './auth/salir/salir.module#SalirPageModule' },
  { path: 'vacunas/:id', loadChildren: './vacunas/vacunas.module#VacunasPageModule', canActivate: [ AuthGuard ] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

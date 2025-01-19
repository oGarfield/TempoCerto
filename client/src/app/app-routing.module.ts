import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LocalDetailComponent } from './local-detail/local-detail.component';
import { CidadesComponent } from './cidades/cidades.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cities/local-detail', component: LocalDetailComponent},
  {path: 'cities/local-detail/:globalIdLocal', component: LocalDetailComponent},
  {path: 'cities', component: CidadesComponent},
  {path: 'about', component: AboutPageComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

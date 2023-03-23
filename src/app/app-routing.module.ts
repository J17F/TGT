import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SuscriptionComponent } from './shared/suscription/suscription.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about',component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

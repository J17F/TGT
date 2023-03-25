import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { HelpComponent } from './pages/help/help.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about',component: AboutComponent},
  { path: 'content', component: ContentComponent},
  { path: 'help', component: HelpComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

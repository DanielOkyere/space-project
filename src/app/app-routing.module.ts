import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { DestinationComponent } from './page/destination/destination.component';

const routes: Routes = [
  {path: 'destination', component: DestinationComponent},
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

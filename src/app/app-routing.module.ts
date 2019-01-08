import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component'
import { DashboardComponent } from './Components/dashboard/dashboard.component'
import { MainComponent } from './Components/main/main.component'
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: MainComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }

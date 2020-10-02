import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board/dash-board.component';
import { SummaryComponent } from './dash-board/summary/summary.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/app/Services/authGuard.service'


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'summary', component: SummaryComponent, canActivate: [AuthGuard]},
  {path:'countries', component: DashBoardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

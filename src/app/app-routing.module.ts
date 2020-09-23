import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscribeDataComponent } from './components/escribe-data/escribe-data.component';
import { LeeDataComponent } from './components/lee-data/lee-data.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"leedata",component:LeeDataComponent},
  {path:"escribedata",component:EscribeDataComponent},
  {path:"**",pathMatch:"full",redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

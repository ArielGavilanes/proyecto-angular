import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagesFoundComponent } from './error-control/nopages-found/nopages-found.component';
import { AuthModule } from './auth/auth.module';
import { WebModule } from './web/web.module';


const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path: '**', component:NopagesFoundComponent},

];

@NgModule({
  imports: [
    WebModule,
    AuthModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
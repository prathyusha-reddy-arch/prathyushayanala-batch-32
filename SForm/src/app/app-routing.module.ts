import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [{
  path:'login',
  component: LoginComponent
},
{
  path:'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard],canDeactivate:[AuthGuard]
},
{
  path:'sidebar',
  component:SidebarComponent,
  
  canActivate: [AuthGuard],canDeactivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

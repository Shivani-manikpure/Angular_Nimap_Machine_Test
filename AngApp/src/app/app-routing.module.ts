import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurdHomeComponent } from './components/dashboard/curd-home/curd-home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'Dashboard',component:DashboardComponent,
    children:[
      {
        path:'home',component:HomeComponent
      },
      {
        path:'curd-home',component:CurdHomeComponent
      },
      {path:'Update-home/:id',component:CurdHomeComponent}
    ]
    
  },
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

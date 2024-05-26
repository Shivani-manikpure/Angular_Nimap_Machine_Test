import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from "./components/dashboard/header/header.component";
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { CurdHomeComponent } from './components/dashboard/curd-home/curd-home.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        RegisterComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        HomeComponent,
        CurdHomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        
    ]
})
export class AppModule { }

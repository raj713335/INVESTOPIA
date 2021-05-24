import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
// import { ChartModule, DateTimeService, HiloSeriesService } from '@syncfusion/ej2-angular-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { FooterComponent } from './footer/footer.component';
import { HealthDataComponent } from './health-data/health-data.component';
/*import { DashboardGstatsBarDisplayComponent } from './dashboard-gstats-bar-display/dashboard-gstats-bar-display.component';*/
/*import { DashboardGstatsLineDisplayComponent } from './dashboard-gstats-line-display/dashboard-gstats-line-display.component';*/
/*import { DashboardGstatsDblLineDisplayComponent } from './dashboard-gstats-dbl-line-display/dashboard-gstats-dbl-line-display.component';*/
/*import { DashboardGstatsPieDisplayComponent } from './dashboard-gstats-pie-display/dashboard-gstats-pie-display.component';*/
import { AboutComponent } from './about/about.component';
/*import { DashboardGstatsMultilineDisplayComponent } from './dashboard-gstats-multiline-display/dashboard-gstats-multiline-display.component';*/
import { DynamicAnalysisComponent } from './dynamic-analysis/dynamic-analysis.component';
import { TipsComponent } from './tips/tips.component';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { CryptoDataComponent } from './crypto-data/crypto-data.component';

//import { AnalysisGstatsLineDisplayComponent } from './analysis-gstats-line-display/analysis-gstats-line-display.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    PageNotFoundComponent,
    LandingPageComponent,
    DashboardComponent,
    CommonLayoutComponent,
    UserLayoutComponent,
    AdminLayoutComponent,
    GettingStartedComponent,
    FooterComponent,
    HealthDataComponent,
    /*DashboardGstatsBarDisplayComponent,*/
    /*DashboardGstatsLineDisplayComponent,*/
   /* DashboardGstatsDblLineDisplayComponent,*/
    /*DashboardGstatsPieDisplayComponent,*/
    AboutComponent,
    /*DashboardGstatsMultilineDisplayComponent,*/
    DynamicAnalysisComponent,
    TipsComponent,
    StockMarketComponent,
    AdminDashboardComponent,
    CryptoDataComponent
    /*AnalysisGstatsLineDisplayComponent*/
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, HttpClientModule, routing, NgxCaptchaModule, IgxFinancialChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

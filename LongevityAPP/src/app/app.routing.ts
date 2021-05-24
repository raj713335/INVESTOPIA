import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HealthDataComponent } from './health-data/health-data.component';
import { DynamicAnalysisComponent } from './dynamic-analysis/dynamic-analysis.component';
import { TipsComponent } from './tips/tips.component';
import { StockMarketComponent } from './stock-market/stock-market.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CryptoDataComponent } from './crypto-data/crypto-data.component';

import { AuthGuardService } from './longevity-services/auth-service/auth-guard.service';
import { RegisterDoneService } from './longevity-services/auth-regis-comp/register-done.service';





const routes: Routes = [
  /*{ path: '', component: LandingPageComponent },*/
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'health', component: HealthDataComponent, /* canActivate: [AuthGuardService] */ },
  { path: 'dashboard', component: DashboardComponent, canActivate: [RegisterDoneService] },
  { path: 'health', component: HealthDataComponent, canActivate: [AuthGuardService] },
  { path: 'analysis', component: DynamicAnalysisComponent, /* canActivate: [RegisterDoneService] */ },
  { path: 'stocks', component: StockMarketComponent, /* canActivate: [RegisterDoneService] */ },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'crypto', component: CryptoDataComponent, /* canActivate: [RegisterDoneService] */ },
  { path: '**', component: PageNotFoundComponent }
];

/*export const routing: ModuleWithProviders = RouterModule.forRoot(routes);*/
export const routing: ModuleWithProviders<unknown> = RouterModule.forRoot(routes);

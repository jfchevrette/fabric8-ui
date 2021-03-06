import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

// import { DataResolver } from './app.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'chat',
    loadChildren: './chat/chat.module#ChatModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'learn',
    loadChildren: './learn/learn.module#LearnModule'
  },
  {
    path: 'notifications',
    loadChildren: './notifications/notifications.module#NotificationsModule'
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

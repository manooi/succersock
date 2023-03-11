import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  {
    path: "", component: LayoutComponent,
    children: [
      { path: "home", loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: "livechat", loadChildren: () => import('./pages/livechat/livechat.module').then(m => m.LivechatModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

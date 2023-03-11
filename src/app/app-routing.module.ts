import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  {
    path: "", component: LayoutComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "livechat", loadChildren: () => import('./pages/livechat/livechat.module').then(m => m.LivechatModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

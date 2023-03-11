import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivechatComponent } from './livechat.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: LivechatComponent },
];

@NgModule({
  declarations: [
    LivechatComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LivechatModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/shared/material/material.module';

const routes: Routes = [
  { path: "", component: HomeComponent },
];

@NgModule({
  declarations: [
   HomeComponent 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class HomeModule { }

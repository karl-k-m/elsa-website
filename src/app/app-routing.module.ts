import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenyydComponent } from './menyyd/menyyd.component';

const routes: Routes = [
  { path: 'menyyd', component: MenyydComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

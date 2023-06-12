import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenyydComponent } from './menyyd/menyyd.component';
import { KlaverComponent } from './klaver/klaver.component';
import { MorvComponent } from './morv/morv.component';
import { MeistComponent } from './meist/meist.component';

const routes: Routes = [
  { path: 'menyyd', component: MenyydComponent },
  { path: 'klaver', component: KlaverComponent },
  { path: 'morv', component: MorvComponent },
  { path: 'meist', component: MeistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

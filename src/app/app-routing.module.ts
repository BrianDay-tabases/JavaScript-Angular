import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeListComponent } from './home-list/home-list.component';
import { NewHomeComponent } from './new-home/new-home.component';

const routes: Routes = [
  {
    path: 'add', component: NewHomeComponent
  }, {
    path: 'list', component: HomeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomeModule} from './home/home.module';
import {CarMakersComponent} from './car-makers/car-makers.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: CarMakersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

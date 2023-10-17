import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { CityComponent } from './home/city/city.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'city',
    component: HomeComponent,
    children: [
      {
        path: ':id',
        component: CityComponent,
      },
      {
        path: ':id/posts/:postId',
        component: PostComponent,
      },
    ],
  },
  {
    path: '',
    component: LandingComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

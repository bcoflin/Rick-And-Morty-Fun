import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { CharactersComponent } from './home/characters/characters.component';
import { FourOFourComponent } from './shared/four-ofour/four-ofour.component';
import { ProfileModule } from './profile/profile.module';



export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'characters',
        component: CharactersComponent
      }
    ]
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module.ts',
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: FourOFourComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {}

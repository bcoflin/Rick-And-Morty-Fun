import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { RouterModule,  Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../materials/material.module';
import { AuthGuard } from '../shared/guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    ProfileComponent

  ],
  exports: [ProfileComponent],
  providers: []
})
export class ProfileModule {}

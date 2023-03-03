import { WorkExperienceComponent } from './dashboard/work-experience/work-experience.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './dashboard/education/education.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'education', component: EducationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

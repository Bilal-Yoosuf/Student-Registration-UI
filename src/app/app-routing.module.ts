import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { EnrollComponent } from './enroll/enroll.component';


const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  {path:'home' , component:HomeComponent},
  {path:'students' , component:StudentListComponent},
  {path:'enroll' , component:EnrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

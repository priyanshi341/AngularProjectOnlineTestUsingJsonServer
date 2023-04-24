import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminaddgeneralquestionComponent } from './adminaddgeneralquestion/adminaddgeneralquestion.component';
import { UserComponent } from './user/user.component';
import { UsertestComponent } from './usertest/usertest.component';
import { ResultComponent } from './result/result.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';

const routes: Routes = [
  
  {path:"admin",component:AdminComponent},
  {path:"generalquestion",component:AdminaddgeneralquestionComponent},
  {path:"user",component:UserComponent},
  {path:"usertest",component:UsertestComponent},
  {path:"result",component:ResultComponent},
  {path:"viewall",component:ViewallusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

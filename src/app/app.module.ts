import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminaddgeneralquestionComponent } from './adminaddgeneralquestion/adminaddgeneralquestion.component';
import { UserComponent } from './user/user.component';
import { UsertestComponent } from './usertest/usertest.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ResultComponent } from './result/result.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminaddgeneralquestionComponent,
    UserComponent,
    UsertestComponent,
    ResultComponent,
    ViewallusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

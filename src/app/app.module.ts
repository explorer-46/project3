import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkdataComponent } from './linkdata/linkdata.component';
import { RouterModule, Routes } from '@angular/router';
import{HttpClientModule} from '@angular/common/http'

const link:Routes=[
  {path:"",component:LinkdataComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LinkdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(link)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

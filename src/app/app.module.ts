import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListOfIssuesComponent } from './list-of-issues/list-of-issues.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfIssuesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

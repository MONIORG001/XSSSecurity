import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AapInnerHtmlBindingComponent } from './aap-inner-html-binding/aap-inner-html-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    AapInnerHtmlBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

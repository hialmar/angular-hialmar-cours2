import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HelloService } from './hello.service';
import { DateComponent } from './date/date.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DateComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HelloService, { provide: LOCALE_ID, useValue: "fr-FR" }]
})
export class AppModule { }

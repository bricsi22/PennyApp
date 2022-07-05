import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SummarizationsComponent } from './summarizations/summarizations.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SummarizationsComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SummarizationsComponent } from './summarizations/summarizations.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { StoreModule } from '@ngrx/store';
import * as fromAppReducer from './store/_reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TransactionsEffects } from './store/_effects/transactions.effects';
import { HttpClientModule } from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

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
    HttpClientModule,
    NgxSpinnerModule,
    StoreModule.forRoot(fromAppReducer.appReducer),
    EffectsModule.forRoot([TransactionsEffects]),
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

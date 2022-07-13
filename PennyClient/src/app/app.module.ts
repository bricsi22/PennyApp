import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SummarizationsComponent,
    TransactionsComponent,
    CreateTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(fromAppReducer.appReducer),
    EffectsModule.forRoot([TransactionsEffects]),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    NgxMatDatetimePickerModule,
    NgxCurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

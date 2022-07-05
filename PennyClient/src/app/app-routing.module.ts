import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummarizationsComponent } from './summarizations/summarizations.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: 'transactions', component: TransactionsComponent},
  { path: 'summarizations', component: SummarizationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

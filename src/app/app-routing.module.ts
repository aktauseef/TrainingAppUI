import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { RxjsPracticeComponent } from './Components/rxjs-practice/rxjs-practice.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

const routes: Routes = [
  {
    //loading paymentcards module lazily
    path: 'paymentcards',
    loadChildren: () =>
      import('./payment-card/payment-card.module').then(
        (mod) => mod.PaymentCardModule
      ),
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'rxjs', component: RxjsPracticeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RxjsPracticeComponent } from './Components/rxjs-practice/rxjs-practice.component';

@NgModule({
  declarations: [
    //Declare directive,pipe,component that belongs to current module
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    RxjsPracticeComponent,
  ],
  imports: [
    //Import directive,pipe,component or library to use in current module
    BrowserModule,
    HttpClientModule,
    ProductModule,
    //PaymentCardModule,     //No need to import bcoz we will be loading this module lazily
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule, //Importing app-routing.module routing file
    // RouterModule.forRoot([                               //Another way to create routing without appRoutingModule file
    //   { path: 'welcome', component: WelcomeComponent },
    //   { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    //   { path: '**', component: PageNotFoundComponent }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

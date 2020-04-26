import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingReducer } from './store/reducers/shopping.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingEffects } from './store/effects/shopping.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ shopping: ShoppingReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ShoppingEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';

import { LocalStorageModule } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RaffleComponent } from './raffle/raffle.component';

import { RaffleSessionService } from './raffle-session.service';
import { RaffleSessionGuard } from './raffle-session.guard';
import { StoreService } from './store.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RaffleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    LocalStorageModule.withConfig({
      prefix: 'gamefik-spot',
      storageType: 'localStorage',
    })
  ],
  providers: [
    RaffleSessionService,
    RaffleSessionGuard,
    StoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

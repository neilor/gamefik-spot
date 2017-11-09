import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RaffleComponent } from './raffle/raffle.component';
import { ScratchComponent } from './scratch/scratch.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RaffleComponent,
    ScratchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

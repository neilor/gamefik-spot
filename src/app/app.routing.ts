import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RaffleComponent } from './raffle/raffle.component';
import { RaffleSessionGuard } from './raffle-session.guard';

export const AppRoutes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: WelcomeComponent,
    },
    {
      path: 'raffle',
      component: RaffleComponent,
      canActivate: [RaffleSessionGuard],
    },
  ]
}];

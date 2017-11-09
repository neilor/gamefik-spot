import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RaffleComponent } from './raffle/raffle.component';
import { ScratchComponent } from './scratch/scratch.component';

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
    },
    {
      path: 'scratch',
      component: ScratchComponent,
    }
  ]
}];

export interface Reward {
  name: string;
  isTop: boolean;
  imageURI: string;
  cssClass: string;
}

export interface TopReward extends Reward {
  isTop: true;
  selectedSessions: number[];
}

/*
  Available Rewards - Buddys Programadores do Futuro 2017:
  2 - Headset Multilaser Gamer Verde - PH146
  3 - Mouse Gamer PCTop Falcon Severus Lite 2400DPI - FS1000
  1 - Óculos Realidade Virtual Multilaser - VR Glasses JS080
  4 - Teclado Gamer Fortrek Multimídia Spider GK-704BK Preto/Vermelho 59285
  DEFAULT: Copão 1000 grau Programadores do Futuro
  */

export const DEFAULT_REWARD: Reward = {
  name: 'Copão Programadores do Futuro',
  isTop: false,
  imageURI: '/assets/img/coponudo.jpg',
  cssClass: 'reward-cup',
};

export const TOP_REWARDS: TopReward[] = [
  {
    name: 'Headset Gamer',
    isTop: true,
    imageURI: '/assets/img/headset.png',
    selectedSessions: [2, 10],
    cssClass: 'reward-headset',
  },
  {
    name: 'Mouse Gamer',
    isTop: true,
    imageURI: '/assets/img/mouse.jpg',
    selectedSessions: [4, 12, 16],
    cssClass: 'reward-mouse',
  },
  {
    name: 'Óculos Realidade Virtual',
    isTop: true,
    imageURI: '/assets/img/vr.jpg',
    selectedSessions: [6],
    cssClass: 'reward-vr',
  },
  {
    name: 'Teclado Gamer',
    isTop: true,
    imageURI: '/assets/img/teclado.png',
    selectedSessions: [8, 14, 18, 20],
    cssClass: 'reward-keyboard',
  },
];

import {ImageProps} from 'react-native';

import {images} from '@assets';

export type OnboardingPageItem = {
  title: Array<{text: string; hightlight: boolean}>;
  subtitle: string;
  image: {
    light: ImageProps['source'];
    dark: ImageProps['source'];
  };
  index: number;
  total: number;
  isLastPage: boolean;
};

type OnboardingPageItemWithoutMetadata = Omit<
  OnboardingPageItem,
  'index' | 'total' | 'isLastPage'
>;

const page1: OnboardingPageItemWithoutMetadata = {
  title: [
    {text: 'Uma rede social de ', hightlight: false},
    {text: 'conexões reais', hightlight: true},
  ],
  subtitle:
    'Fique por dentro do que acontece com as pessoas que você mais gosta',
  image: {
    light: images.onboardingLight1,
    dark: images.onboardingDark1,
  },
};

const page2: OnboardingPageItemWithoutMetadata = {
  title: [
    {text: 'Compartilhe suas ', hightlight: false},
    {text: 'histórias ', hightlight: true},
    {text: 'com seus amigos próximos', hightlight: false},
  ],
  subtitle: 'Tenha sua linha do tempo personalizada',
  image: {
    light: images.onboardingLight2,
    dark: images.onboardingDark2,
  },
};

const page3: OnboardingPageItemWithoutMetadata = {
  title: [
    {text: 'Interaja ', hightlight: true},
    {text: 'em tempo real com as pessoas', hightlight: false},
  ],
  subtitle: 'Curta, comente e favorite os conteúdos que você mais gostar',
  image: {
    light: images.onboardingLight3,
    dark: images.onboardingDark3,
  },
};

export const onboardingPages: OnboardingPageItem[] = [page1, page2, page3].map(
  (page, index, array) => {
    return {
      ...page,
      index,
      total: array.length,
      isLastPage: index + 1 === array.length,
    };
  },
);

import {IconProps} from '@components';

import {AppBottomTabParamList} from './AppTabNavigator';

type TabScreenProps = {
  label: string;
  icon: {
    focused: IconProps['name'];
    unfocused: IconProps['name'];
  };
};

export const mapTabScreenToProps: Record<
  keyof AppBottomTabParamList,
  TabScreenProps
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  NewPostScreen: {
    label: 'Novo post',
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  FavoriteScreen: {
    label: 'Favoritos',
    icon: {
      focused: 'bookmarkFill',
      unfocused: 'bookmark',
    },
  },
  MyProfileScreen: {
    label: 'Perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};

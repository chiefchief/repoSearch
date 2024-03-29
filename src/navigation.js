import { Navigation } from 'react-native-navigation';

export const back = componentId => {
  Navigation.pop(componentId);
};

export const navigateTo = (componentId, goTo) => {
  Navigation.push(componentId, {
    component: {
      name: goTo,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
  });
};

import { Navigation } from 'react-native-navigation';

export const back = componentId => {
  Navigation.pop(componentId);
};

export const exitApp = () =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'SignIn',
              options: {
                topBar: {
                  visible: false,
                },
                statusBar: {
                  style: 'dark',
                },
              },
            },
          },
        ],
      },
    },
  });

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

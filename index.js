import { Navigation } from 'react-native-navigation';
import { register } from './src/screens';

console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: ReactNative.createElement'];

register();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      height: 0,
    },
    statusBar: {
      style: 'dark',
      backgroundColor: '#00000000',
      drawBehind: true,
    },
  });

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
                  height: 0,
                },
              },
            },
          },
        ],
      },
    },
  });
});

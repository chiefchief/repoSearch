import { Navigation } from 'react-native-navigation';
import { register } from './src/screens';

console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: ReactNative.createElement'];

register();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    },
    statusBar: {
      style: 'dark',
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'SignIn',
            },
          },
        ],
      },
    },
  });
});

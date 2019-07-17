import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from './store';

const WrappedComponent = Component => {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );

    return <EnhancedComponent />;
  };
};

const regScreen = (screenName, component) =>
  Navigation.registerComponent(screenName, () => WrappedComponent(component));

export function register() {
  regScreen('SignIn', require('components/sign-in').default);
  regScreen('Main', require('components/main').default);
  regScreen('Modal', require('components/modal').default);
}

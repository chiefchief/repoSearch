import { combineReducers } from 'redux';

export default combineReducers({
  repositories: require('./repositories').default,
  web: require('./web').default,
});

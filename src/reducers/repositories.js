import { REPOSITORIES } from './__proto__';
import { getRepos } from 'services/requests';
import { Alert } from 'react-native';

const SET_REPOSITORIES = '[repositories] SET_REPOSITORIES';
const RESET_REPOSITORIES = '[repositories] RESET_REPOSITORIES';
const initialState = new REPOSITORIES();

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOSITORIES:
      return action.repo;
    case RESET_REPOSITORIES:
      return initialState;
    default:
      return state;
  }
};

export const getRepositories = (search, count, sortBy) => async dispatch => {
  try {
    let response = await getRepos(search, count, sortBy);
    dispatch(setRepositories(new REPOSITORIES(response)));
    if (response.total_count === 0) {
      Alert.alert(
        'RESULT',
        'no Repositories',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    }
  } catch (e) {
    console.log(e, 'error code');
    Alert.alert(
      'error',
      e,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false },
    );
  }
};

export const setRepositories = repo => ({ type: SET_REPOSITORIES, repo });
export const resetRepositories = () => ({ type: RESET_REPOSITORIES });

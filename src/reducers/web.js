const SET_WEB = '[web] SET_WEB';
const RESET_WEB = '[web] RESET_WEB';
const initialState = 'https://github.com/';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WEB:
      return action.web;
    case RESET_WEB:
      return state;
    default:
      return state;
  }
};

export const setWeb = web => ({ type: SET_WEB, web });
export const resetWeb = () => ({ type: RESET_WEB });

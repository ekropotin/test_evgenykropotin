import { Actions } from 'actions';

const defaultState = { one: false, two: false, three: false, four: false, five: false };
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [Actions.CHANGE_SELECTION]: (state, action) => ({ ...state, ...action.payload })
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function (state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

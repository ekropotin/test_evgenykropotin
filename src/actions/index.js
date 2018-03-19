export const Actions = {
  CHANGE_VALUE: 'CHANGE_VALUE',
  CHANGE_SELECTION: 'CHANGE_SELECTION'
};

export const changeValue = (newValue) => ({
  type: Actions.CHANGE_VALUE,
  payload: newValue
});

export const changeSelection = (newSelection) => ({
  type: Actions.CHANGE_SELECTION,
  payload: newSelection
});

const a = {
  stored_value: 'abc',
  stored_selection: { one: true, two: false, three: false, four: true, five: false }
};

import React from 'react';
import PropTypes from 'prop-types';

const checkBoxNames = ['one', 'two', 'three', 'four', 'five'];

export const PresIn = (props) => {
  function handleValueChange (e) {
    props.changeValue(e.target.value);
  }

  function handleCheckboxChange (e) {
    const param = {};
    param[e.target.id] = e.target.checked;
    props.changeSelection(param);
  }

  function isChecked (checkBoxName) {
    return !!props.selection[checkBoxName];
  }

  return (
    <div>
      <input type='text' value={props.value} onChange={handleValueChange} />

      {checkBoxNames.map((checkboxName) =>

        <div key={checkboxName} className='checkbox'>
          <label>
            <input id={checkboxName} type='checkbox' checked={isChecked(checkboxName)} onChange={handleCheckboxChange} />
            {checkboxName}
          </label>
        </div>

      ) }
    </div>
  );
};

PresIn.propTypes = {
  value: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
  changeValue: PropTypes.func.isRequired,
  changeSelection: PropTypes.func.isRequired
};

export default PresIn;

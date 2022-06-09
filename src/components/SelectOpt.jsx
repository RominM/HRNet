import React from 'react';
import Select from 'react-select';

const SelectOpt = (props) => {
  return (
    <div>
      <Select
        onChange={(e) => props.setValue(e)}
        options={props.options}
        placeholder={props.placeholder}
        className={props.className}
      />
    </div>
  );
};

export default SelectOpt;

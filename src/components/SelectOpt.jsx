import React from 'react';
import Select from 'react-select';

const SelectOpt = (props) => {
   return (
      <div>
         <Select onChange={(e) => props.getValue(e)} options={props.options} />
      </div>
   );
};

export default SelectOpt;

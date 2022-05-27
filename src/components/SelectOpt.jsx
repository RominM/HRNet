import React, { useState } from 'react';
import Select from 'react-select';

const SelectOpt = (props) => {
   const [selectedOption, setSelectedOption] = useState(null);

   return (
      <div>
         <Select
            defaultlabel={selectedOption}
            onChange={setSelectedOption}
            options={props.options}
         />
      </div>
   );
};

export default SelectOpt;

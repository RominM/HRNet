import React from 'react';

const SaveButton = (props) => {
   return (
      <button
         className="save-btn"
         type="button"
         onClick={() => props.setTrigger(true)}
      >
         Save
      </button>
   );
};

export default SaveButton;

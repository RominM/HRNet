import React from 'react';

const Modale = (props) => {
   return props.trigger ? (
      <div className="modale">
         <div className="popup">
            <button id="x" onClick={() => props.setTrigger(false)}>
               X
            </button>
            <span>{props.text}</span>
         </div>
      </div>
   ) : (
      ''
   );
};

export default Modale;

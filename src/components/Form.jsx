import React, { useState } from 'react';
import { departements } from '../utils/departements';
import { states } from '../utils/states';
import DatePicker from 'react-date-picker';

const Form = () => {
   const [birthValue, setBirthValue] = useState(new Date());
   const [startValue, setStartValue] = useState(new Date());

   const [modale, setModale] = useState(false);

   const saveEmployee = () => setModale(true);

   const closeModale = () => setModale(false);

   return modale ? (
      <div className="modale">
         <button id="x" onClick={closeModale}>
            X
         </button>
         <span>Employee Created!</span>
      </div>
   ) : (
      <div>
         <form action="POST" id="create-employee">
            <fieldset className="informations left-part">
               <legend>Informations</legend>
               <div className="inputs">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" />
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" />

                  <label htmlFor="date-of-birth">Date of Birth</label>
                  {/* <input id="date-of-birth" type="text" /> */}
                  <DatePicker
                     onChange={setBirthValue}
                     value={birthValue}
                     className="datepicker"
                  />

                  <label htmlFor="start-date">Start Date</label>
                  {/* <input id="start-date" type="text" /> */}
                  <DatePicker
                     onChange={setStartValue}
                     value={startValue}
                     className="datepicker"
                  />
               </div>
            </fieldset>

            <fieldset className="address right-part">
               <legend>Address</legend>
               <div className="inputs">
                  <label htmlFor="street">Street</label>
                  <input id="street" type="text" />

                  <label htmlFor="city">City</label>
                  <input id="city" type="text" />

                  <label htmlFor="state">State</label>
                  <select name="" id="">
                     {states.map((state) => (
                        <option key={state.abbreviation}>{state.name}</option>
                     ))}
                  </select>

                  <label htmlFor="zip-code">Zip Code</label>
                  <input id="zip-code" type="number" />

                  <label htmlFor="department">Department</label>
                  <select name="department" id="department">
                     {departements.map((department) => (
                        <option key={department}>{department}</option>
                     ))}
                  </select>
               </div>
            </fieldset>
            <button className='save-btn' type="button" onClick={saveEmployee}>
               Save
            </button>
         </form>
      </div>
   );
};

export default Form;

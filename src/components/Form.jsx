import React from 'react';
import Select from './Select';

const Form = () => {
   return (
      <div>
         <form action="#" id="create-employee">
            <fieldset className="informations left-part">
               <legend>Informations</legend>
               <div className="inputs">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" />

                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" />

                  <label htmlFor="date-of-birth">Date of Birth</label>
                  <input id="date-of-birth" type="text" />

                  <label htmlFor="start-date">Start Date</label>
                  <input id="start-date" type="text" />
               </div>
            </fieldset>

            <fieldset class="address right-part">
               <legend>Address</legend>
               <div className="inputs">
                  <label for="street">Street</label>
                  <input id="street" type="text" />

                  <label for="city">City</label>
                  <input id="city" type="text" />

                  <label for="state">State</label>
                  <select name="state" id="state"></select>

                  <label for="zip-code">Zip Code</label>
                  <input id="zip-code" type="number" />

                  <label for="department">Department</label>
                  <Select />
               </div>
            </fieldset>
            <button onclick="saveEmployee()">Save</button>
         </form>
      </div>
   );
};

export default Form;

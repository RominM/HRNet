import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { departements } from '../utils/departementsList';
import { statesUS } from '../utils/statesUS';

const Form = () => {
   const [state, setState] = useState({
      firstName: '',
      lastName: '',
      startDate: new Date(),
      department: '',
      dateOfBirth: new Date(),
      street: '',
      city: '',
      state: '',
      zipCode: '',
   });

   const getValue = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setState({ [name]: value });
   };

   const saveEmployee = (e) => {
      e.preventDefault();
      const firstName = state.firstName;
      const lastName = state.lastName;
      const startDate = state.startDate;
      const department = state.department;
      const dateOfBirth = state.dateOfBirth;
      const street = state.street;
      const city = state.city;
      const thisState = state.state;
      const zipCode = state.zipCode;
   };
   console.log(state);

   return (
      <form action="POST" id="create-employee">
         <fieldset className="informations left-part">
            <legend>Informations</legend>
            <div className="inputs">
               <label htmlFor="first-name">First Name</label>
               <input
                  type="text"
                  id="first-name"
                  onChange={getValue}
                  name="firstName"
               />

               <label htmlFor="last-name">Last Name</label>
               <input
                  type="text"
                  id="last-name"
                  onChange={getValue}
                  name="lastName"
               />

               <label htmlFor="date-of-birth">Date of Birth</label>
               <DatePicker
                  onChange={getValue}
                  value={state.dateOfBirth}
                  className="datepicker"
                  id="date-of-birth"
               />

               <label htmlFor="start-date">Start Date</label>
               <DatePicker
                  onChange={getValue}
                  value={state.startDate}
                  className="datepicker"
                  id="start-date"
               />
            </div>
         </fieldset>

         <fieldset className="address right-part">
            <legend>Address</legend>
            <div className="inputs">
               <label htmlFor="street">Street</label>
               <input
                  id="street"
                  type="text"
                  onChange={getValue}
                  name="street"
               />

               <label htmlFor="city">City</label>
               <input id="city" type="text" onChange={getValue} name="city" />

               <label htmlFor="state">State</label>
               <select name="" id="">
                  {statesUS.map((state) => (
                     <option key={state.abbreviation}>{state.name}</option>
                  ))}
               </select>

               <label htmlFor="zip-code">Zip Code</label>
               <input
                  id="zip-code"
                  type="number"
                  onChange={getValue}
                  name="zipCode"
               />

               <label htmlFor="department">Department</label>
               <select name="department" id="department">
                  {departements.map((department) => (
                     <option key={department}>{department}</option>
                  ))}
               </select>
            </div>
         </fieldset>
      </form>
   );
};

export default Form;

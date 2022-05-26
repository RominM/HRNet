import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
// import Select from 'react-select';
import { departements } from '../utils/departementsList';
import { statesUS } from '../utils/statesUS';
import Modale from './Modale';
import SaveButton from './SaveButton';

const Form = () => {
   const [isOpen, setIsOpen] = useState(false);

   const text = 'Employee created !!';

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
      // const firstName = state.firstName;
      // const lastName = state.lastName;
      // const startDate = state.startDate;
      // const department = state.department;
      // const dateOfBirth = state.dateOfBirth;
      // const street = state.street;
      // const city = state.city;
      // const stateChoice = state.state;
      // const zipCode = state.zipCode;
      setIsOpen(true);
   };

   return (
      <form action="" id="create-employee">
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
                  onChange={getValue}
                  type="text"
                  id="last-name"
                  name="lastName"
               />

               <label htmlFor="date-of-birth">Date of Birth</label>
               <DatePicker
                  onChange={(value) =>
                     setState({ ...state, dateOfBirth: value })
                  }
                  value={state.dateOfBirth}
                  format={'MM/dd/y'}
                  className="datepicker"
                  id="date-of-birth"
                  name="dateOfBirth"
               />

               <label htmlFor="start-date">Start Date</label>
               <DatePicker
                  onChange={(value) => setState({ ...state, startDate: value })}
                  value={state.startDate}
                  format={'MM/dd/y'}
                  className="datepicker"
                  id="start-date"
                  name="startDate"
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

               <label htmlFor="stateChoice">State</label>
               <select
                  name="stateChoice"
                  id="stateChoice"
                  onChange={getValue}
                  value={state.stateChoice}
               >
                  {statesUS.map((state) => (
                     <option key={state.abbreviation}>{state.name}</option>
                  ))}
               </select>
               {/* <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={statesUS}
               /> */}

               <label htmlFor="zip-code">Zip Code</label>
               <input
                  id="zip-code"
                  type="number"
                  onChange={getValue}
                  name="zipCode"
               />

               <label htmlFor="department">Department</label>
               <select
                  name="department"
                  id="department"
                  onChange={getValue}
                  value={state.department}
               >
                  {departements.map((department) => (
                     <option key={department}>{department}</option>
                  ))}
               </select>
               {/* <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={departements}
               /> */}
            </div>
         </fieldset>
         <SaveButton saveEmployee={saveEmployee} />
         <Modale text={text} trigger={isOpen} setTrigger={setIsOpen} />
      </form>
   );
};

export default Form;

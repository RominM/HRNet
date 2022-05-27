import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { departements } from '../utils/departementsList';
import { statesUS } from '../utils/statesUS';
import Modale from './Modale';
import SaveButton from './SaveButton';
import SelectOpt from './SelectOpt';

const Form = (props) => {
   const setNewEmployee = props.setNewEmployee;

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
   const newState = [];
   const [isOpen, setIsOpen] = useState(false);

   const setValue = (args) => {
      const name = args.target ? args.target.name : args.name;
      const value = args.target ? args.target.value : args.value;
      state[name] = value;
      setState(state);
   };

   const saveEmployee = (e) => {
      e.preventDefault();
      newState.push(state);
      setState(state);
      setNewEmployee(state);
      setIsOpen(true);
      console.log(newState);
   };

   const textModal = 'Employee created !!';

   return (
      <form action="" id="create-employee">
         <fieldset className="informations left-part">
            <legend>Informations</legend>
            <div className="inputs">
               <label htmlFor="first-name">First Name</label>
               <input
                  type="text"
                  id="first-name"
                  onChange={setValue}
                  name="firstName"
               />

               <label htmlFor="last-name">Last Name</label>
               <input
                  onChange={setValue}
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
                  onChange={(value) => {
                     setState({ ...state, startDate: value });
                  }}
                  value={state.startDate}
                  format={'MM/dd/y'}
                  className="datepicker"
                  id="start-date"
                  name="startDate"
               />

               <label htmlFor="department">Department</label>
               <SelectOpt
                  options={departements}
                  setValue={(value) => {
                     setValue({ name: 'department', value });
                  }}
                  placeholder={departements[0].label}
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
                  onChange={setValue}
                  name="street"
               />

               <label htmlFor="city">City</label>
               <input id="city" type="text" onChange={setValue} name="city" />

               <label htmlFor="stateChoice">State</label>
               <SelectOpt
                  options={statesUS}
                  setValue={(value) => setValue({ name: 'state', value })}
                  placeholder={statesUS[0].label}
               />

               <label htmlFor="zip-code">Zip Code</label>
               <input
                  id="zip-code"
                  type="number"
                  onChange={setValue}
                  name="zipCode"
               />
            </div>
            <SaveButton saveEmployee={saveEmployee} />
         </fieldset>
         <Modale text={textModal} trigger={isOpen} setTrigger={setIsOpen} />
      </form>
   );
};

export default Form;

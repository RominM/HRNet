import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { departements } from '../utils/labels/departementsList';
import { statesUS } from '../utils/labels/statesUS';
import { Modale } from 'modale-react-rm';
import SaveButton from './SaveButton';
import SelectOpt from './SelectOpt';
import { emptyState } from '../utils/initState';

const Form = (props) => {
  const addEmployee = props.setCurrentList;

  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(emptyState);

  const setValue = (args) => {
    const name = args.target ? args.target.name : args.name;
    const value = args.target ? args.target.value : args.value;
    state[name] = value;
    setState(state);
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    const newState = {
      firstName: state.firstName,
      lastName: state.lastName,
      startDate: state.startDate.toLocaleDateString('en-US'),
      department: state.department.label,
      dateOfBirth: state.dateOfBirth.toLocaleDateString('en-US'),
      street: state.street,
      city: state.city,
      state: state.state.label,
      zipCode: state.zipCode,
    };
    checkForm(newState);
  };

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      saveEmployee();
    }
  };

  const checkForm = (newState) => {
    if (newState.firstName.length < 2) {
      alert('Please entry a FirstName (min 2 lettres)');
    } else if (newState.lastName.length < 2) {
      alert('Please entry a LastName (min 2 lettres)');
    } else if (newState.startDate == null) {
      /* Have to check the error when I use the cross */
      alert('Please choose a Start date');
    } else if (newState.department == null) {
      alert('Please select a department');
    } else if (newState.dateOfBirth == null) {
      /* Have to check the error when I use the cross */
      alert('Please choose a Date of birth');
    } else if (newState.street.length < 2) {
      alert('Please entry a Street (min 2 lettres)');
    } else if (newState.city.length < 2) {
      alert('Please entry a City (min 2 lettres)');
    } else if (newState.state == null) {
      alert('Please select a State');
    } else if (newState.zipCode.length === 0) {
      alert('Please entry a Zip code');
    } else {
      document.getElementById('create-employee').reset();
      setIsOpen(true);
      addEmployee(newState);
    }
  };

  const textModal = 'Employee created !!';

  return (
    <form action="#" method="GET" id="create-employee">
      <fieldset className="informations left-part">
        <legend>Informations</legend>
        <div className="inputs">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={setValue}
            name="firstName"
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            onChange={setValue}
            type="text"
            id="last-name"
            name="lastName"
            required
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            onChange={(date) => {
              setState({ ...state, dateOfBirth: date });
            }}
            value={state.dateOfBirth}
            format={'MM/dd/y'}
            className="datepicker"
            id="date-of-birth"
            name="dateOfBirth"
            calendarAriaLabel="date of birth calendar icon"
            clearAriaLabel="date of birth clear icon"
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            onChange={(date) => {
              setState({ ...state, startDate: date });
            }}
            value={state.startDate}
            format={'MM/dd/y'}
            className="datepicker"
            id="start-date"
            name="startDate"
            calendarAriaLabel="starte date calendar icon"
            clearAriaLabel="starte date clear icon"
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
          <input id="street" type="text" onChange={setValue} name="street" />

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

        <SaveButton saveEmployee={saveEmployee} onKeypresse={handleKeypress} />
      </fieldset>
      <Modale content={textModal} trigger={isOpen} setTrigger={setIsOpen} />
    </form>
  );
};

export default Form;

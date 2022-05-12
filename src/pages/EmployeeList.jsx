import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../components/Table';

const EmployeeList = () => {
  return (
    <div id="employee-div" class="container">
      <h1>Current Employees</h1>
      <Table />
      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeeList;

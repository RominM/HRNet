import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Table from '../components/Table';

const EmployeeList = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>HRnet - Current Employees</title>
      </Helmet>
      <div id="employee-div" class="container">
        <h1>Current Employees</h1>
        <Table />
        <Link to="/">Home</Link>
      </div>
    </HelmetProvider>
  );
};

export default EmployeeList;

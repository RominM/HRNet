import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Form from '../components/Form';

const CreateEmployee = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>HRnet</title>
      </Helmet>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form />
      </div>
      <div id="confirmation" class="modal" hidden>
        Employee Created!
      </div>
    </HelmetProvider>
  );
};

export default CreateEmployee;

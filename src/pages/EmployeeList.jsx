import React from 'react';
import { PropTypes } from 'prop-types';

import Title from '../components/Title';
import Table from '../components/Table';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const EmployeeList = (props) => {
  const updateNewEmployee = props.updateNewEmployee;

  return (
    <HelmetProvider>
      <Helmet>
        <title>HRNet - Employee liste</title>
      </Helmet>
      <main className="container">
        <section>
          <Title title="Current Employees" />
          <Table updateNewEmployee={updateNewEmployee} />
        </section>
      </main>
    </HelmetProvider>
  );
};

export default EmployeeList;

EmployeeList.propTypes = {
  updateNewEmployee: PropTypes.array.isRequired,
};

import React from 'react';
import { PropTypes } from 'prop-types';

import Title from '../components/Title';
import Form from '../components/Form';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const CreateEmployee = (props) => {
  const addEmployee = props.setCurrentList;

  return (
    <HelmetProvider>
      <Helmet>
        <title>HRNet - Create Employee</title>
      </Helmet>
      <main className="container">
        <section>
          <Title title="Create Employee" />
          <Form setCurrentList={addEmployee} />
        </section>
      </main>
    </HelmetProvider>
  );
};

export default CreateEmployee;

CreateEmployee.propTypes = {
  setCurrentList: PropTypes.func.isRequired,
};

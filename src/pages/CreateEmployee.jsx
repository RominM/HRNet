import React from 'react';
import Title from '../components/Title';
import Form from '../components/Form';

const CreateEmployee = (props) => {
  const setNewEmployee = props.setNewEmployee;

  return (
    <main className="container">
      <section>
        <Title title="Create Employee" />
        <Form setNewEmployee={setNewEmployee} />
      </section>
    </main>
  );
};

export default CreateEmployee;

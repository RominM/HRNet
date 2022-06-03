import React from 'react';
import Title from '../components/Title';
import Table from '../components/Table';

const EmployeeList = (props) => {
  const updateNewEmploye = props.updateNewEmploye;

  return (
    <main className="container">
      <section>
        <Title title="Current Employees" />
        <Table updateNewEmploye={updateNewEmploye} />
      </section>
    </main>
  );
};

export default EmployeeList;

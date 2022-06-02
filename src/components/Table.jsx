import React from 'react';
import DataTables from 'datatables-plugin-react';
import { labelsForm } from '../utils/labels.format';
import { exampleData } from '../utils/data.employee';

const Table = (props) => {
  const newEmployee = props.newEmployee;
  let addEmployee = [];

  newEmployee
    ? addEmployee.push(...newEmployee)
    : addEmployee.push(...exampleData);

  return <DataTables labels={labelsForm} data={addEmployee} />;
};

export default Table;

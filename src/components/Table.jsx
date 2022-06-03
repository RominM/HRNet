import React, { useEffect } from 'react';
import DataTables from 'datatables-plugin-react';
import { labelsForm } from '../utils/labels/labels.format';
import { exampleData } from '../utils/data/data.employee';

const Table = (props) => {
  const newEmployee = props.newEmployee;
  let addEmployee = [];

  useEffect(() => {
    newEmployee
      ? addEmployee.push(...newEmployee)
      : addEmployee.push(...exampleData);
  }, [addEmployee]);

  console.log(addEmployee);
  return <DataTables labels={labelsForm} data={addEmployee} />;
};

export default Table;

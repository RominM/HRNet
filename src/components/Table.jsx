import React from 'react';
import DataTables from 'datatables-plugin-react';
import { labelsForm } from '../utils/labels.format';
import { exampleData } from '../utils/data.employee';

const Table = (props) => {
   const newEmployee = props.newEmployee;
   console.log(newEmployee);

   return <DataTables labels={labelsForm} data={exampleData} />;
};

export default Table;

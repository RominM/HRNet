import React from 'react';
import DataTables from 'datatables-plugin-react';
import { labelsForm } from '../utils/labels/labels.format';

const Table = (props) => {
  const updateNewEmployee = props.updateNewEmployee;

  return <DataTables labels={labelsForm} data={updateNewEmployee} />;
};

export default Table;

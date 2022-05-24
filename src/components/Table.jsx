import React from 'react';
import DataTables from 'datatables-plugin-react';
import { labelsForm } from '../utils/labels.format';
import { exampleData } from '../utils/data.employee';

const Table = (props) => {
   return <DataTables labels={labelsForm} data={exampleData} />;
};

export default Table;

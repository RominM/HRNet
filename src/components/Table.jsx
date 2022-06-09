import React from 'react';
import DataTables from 'datatables-plugin-react';
import { labelsForm } from '../utils/labels/labels.format';
/*
const exampleData = [
  {
    firstName: 'John',
    lastName: 'Snow',
    startDate: '04/14/2021',
    department: 'Marketing',
    dateOfBirth: '01/01/1990',
    rue: 'Abbey Road',
    street: 'New York',
    state: 'NY',
    zipCode: ' 01800 ',
  },
  {
    firstName: 'Elisa',
    lastName: 'Tyrel',
    startDate: '03/02/2020',
    departement: 'Marketing',
    dateOfBirth: '01/25/1988',
    rue: 'Helia Street',
    street: 'San Francisco',
    state: 'AK',
    zipCode: ' 85699 ',
  },
  {
    firstName: 'Thomas',
    lastName: 'Anderson',
    startDate: '05/09/1998',
    departement: 'Sales',
    dateOfBirth: '  03/11/1962',
    rue: 'Lower Downtown',
    street: 'NY',
    state: 'NY',
    zipCode: ' 0001 ',
  },
  {
    firstName: 'Sirius',
    lastName: 'Black',
    startDate: '05/09/1998',
    departement: 'Legal',
    dateOfBirth: '  11/03/1959',
    rue: 'London',
    street: 'Boston',
    state: 'Connecticut',
    zipCode: ' 0001 ',
  },
  {
    firstName: 'Bilbon',
    lastName: 'Sacquet',
    startDate: '02/02/1998',
    departement: 'Legal',
    dateOfBirth: '  11/05/1902',
    rue: 'Chemin du pain',
    street: 'Boston',
    state: 'Connecticut',
    zipCode: '75001',
  },
  {
    firstName: 'Sheldon',
    lastName: 'Cooper',
    startDate: '02/10/2000',
    departement: 'Sales',
    dateOfBirth: '  12/01/1988',
    rue: 'Lower Downtown',
    street: 'NY',
    state: 'NY',
    zipCode: '58460',
  },
];
*/
const Table = (props) => {
  const updateNewEmployee = props.updateNewEmployee;

  return <DataTables labels={labelsForm} data={updateNewEmployee} />;
};

export default Table;

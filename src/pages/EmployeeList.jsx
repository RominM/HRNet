import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Table from '../components/Table';

const EmployeeList = () => {
   return (
      <HelmetProvider>
         <Helmet>
            <title>HRnet - Current Employees</title>
         </Helmet>
         <section id="employee-div" class="container">
            <h1>Current Employees</h1>
            <Table />
         </section>
      </HelmetProvider>
   );
};

export default EmployeeList;

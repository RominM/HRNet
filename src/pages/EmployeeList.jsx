import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Table from '../components/Table';

const EmployeeList = (props) => {
   const newEmployee = props.newEmployee;

   return (
      <HelmetProvider>
         <Helmet>
            <title>HRnet - Current Employees</title>
         </Helmet>
         <main id="employee-div" className="container">
            <section>
               <div className="title">
                  <h1>Current Employees</h1>
               </div>
               <Table newEmployee={newEmployee} />
            </section>
         </main>
      </HelmetProvider>
   );
};

export default EmployeeList;

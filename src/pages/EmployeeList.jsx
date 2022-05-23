import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Table from '../components/Table';

const EmployeeList = () => {
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
               <Table />
            </section>
         </main>
      </HelmetProvider>
   );
};

export default EmployeeList;

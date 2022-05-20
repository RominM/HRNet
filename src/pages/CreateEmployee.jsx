import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Form from '../components/Form';

const CreateEmployee = () => {
   return (
      <HelmetProvider>
         <Helmet>
            <title>HRnet</title>
         </Helmet>
         <section className="container">
            <h2>Create Employee</h2>
            <Form />
            <div id="confirmation" class="modal">
               Employee Created!
            </div>
         </section>
      </HelmetProvider>
   );
};

export default CreateEmployee;

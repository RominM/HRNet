import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Form from '../components/Form';

const CreateEmployee = () => {
   return (
      <HelmetProvider>
         <Helmet>
            <title>HRnet</title>
         </Helmet>
         <main className="container">
            <section>
               <h2>Create Employee</h2>
               <Form />
               <div id="confirmation" class="modal" hidden>
                  Employee Created!
               </div>
            </section>
         </main>
      </HelmetProvider>
   );
};

export default CreateEmployee;

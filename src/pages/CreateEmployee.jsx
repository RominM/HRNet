import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Form from '../components/Form';

const CreateEmployee = () => {
   return (
      <HelmetProvider>
         <Helmet>
            <title>HRnet - Home</title>
         </Helmet>
         <main className="container">
            <section>
               <div className="title">
                  <h1>Create Employee</h1>
               </div>
               <Form />
            </section>
         </main>
      </HelmetProvider>
   );
};

export default CreateEmployee;

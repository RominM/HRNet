import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SaveButton from '../components/SaveButton';
import Form from '../components/Form';
import Modale from '../components/Modale';

const CreateEmployee = () => {
   const [isOpen, setIsOpen] = useState(false);
   const text = 'Employee created !!';
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
               <SaveButton setTrigger={setIsOpen} />
            </section>
            <Modale text={text} trigger={isOpen} setTrigger={setIsOpen} />
         </main>
      </HelmetProvider>
   );
};

export default CreateEmployee;

import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import SaveButton from '../components/SaveButton';
// import { Modale } from 'modale-react-rm';
import Form from '../components/Form';

const CreateEmployee = (props) => {
  const setNewEmployee = props.setNewEmployee;
  // const [isOpen, setIsOpen] = useState(false);
  // const text = 'Employee created !!';

  return (
    <HelmetProvider>
      <Helmet>
        <title>HRnet - Home</title>
      </Helmet>
      <main className="container">
        <section>
          <div className="title">
            <h2>Create Employee</h2>
          </div>
          <Form setNewEmployee={setNewEmployee} />
          {/* <SaveButton setTrigger={setIsOpen} /> */}
        </section>
        {/* <Modale content={text} trigger={isOpen} setTrigger={setIsOpen} /> */}
      </main>
    </HelmetProvider>
  );
};

export default CreateEmployee;

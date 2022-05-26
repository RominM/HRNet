import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';

function App() {
   const [records, setRecords] = useState([]);
   return (
      <div className="bloc-page">
         <Header />
         <Routes>
            <Route
               path="/"
               element={<CreateEmployee setRecords={setRecords} />}
            />
            <Route
               path="/employee-list"
               element={<EmployeeList records={records} />}
            />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;

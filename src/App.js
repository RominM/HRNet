import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import { stockData } from './utils/stockData';

function App() {
   const [newEmployee, setNewEmployee] = useState();
   // stockData(newEmployee);
   return (
      <div className="bloc-page">
         <Header />
         <Routes>
            <Route
               path="/"
               element={<CreateEmployee setNewEmployee={setNewEmployee} />}
            />
            <Route
               path="/employee-list"
               element={<EmployeeList newEmployee={newEmployee} />}
            />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;

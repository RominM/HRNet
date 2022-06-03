import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';

const initialData = localStorage.getItem('employee');

function App() {
  const [currentList, setCurrentList] = useState(
    initialData ? JSON.parse(initialData) : []
  );

  function addEmployee(newOne) {
    currentList.push(newOne);
    localStorage.setItem('employee', JSON.stringify(currentList));
    setCurrentList(currentList);
  }

  return (
    <div className="bloc-page">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<CreateEmployee setCurrentList={addEmployee} />}
        />
        <Route
          path="/employee-list"
          element={<EmployeeList updateNewEmployee={currentList} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

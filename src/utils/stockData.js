// import { exampleData } from './data.employee';
/*
export const stockData = (newEmployee) => {
  const employee = sessionStorage.getItem('employee');
  employee
    ? JSON.parse(newEmployee)
    : sessionStorage.setItem('employee', JSON.stringify(exampleData));
};

const stockage = (newEmployee) => {
  const getStockDate = stockData();

  sessionStorage.setItem('employee', JSON.stringify(getStockDate));
};

const getEmployee = () => {
  const employee = sessionStorage.getItem('whole');
  console.log(employee);

  if (employee) {
    return JSON.parse(employee);
  } else {
    sessionStorage.setItem('whole', JSON.stringify(exampleData));
    return exampleData;
  }
};

const stockData = (newEmployee) => {
  const employee = getEmployee();

  employee.unshift(newEmployee);
  sessionStorage.setItem('whole', JSON.stringify(employee));
};
*/

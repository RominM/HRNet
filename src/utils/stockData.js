export const stockData = (newEmployee) => {
  newEmployee && sessionStorage.getItem(newEmployee);

  console.log('data could be stocked in the sessionStorage ', newEmployee);
};

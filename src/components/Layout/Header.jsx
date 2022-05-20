import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <header>
         <h1>HR Net</h1>
         <div className="links">
            {/* {on home page ? */}
            <Link to="/employee-list">View Current Employees</Link>
            {/* : */}
            <Link to="/">Home</Link>
            {/* } */}
         </div>
      </header>
   );
};

export default Header;

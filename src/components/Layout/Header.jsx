import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   // Handle Toggle
   const [toggle, setToggle] = useState(false);
   const navList = () => setToggle(true);
   const navHome = () => setToggle(false);

   return (
      <header>
         <h1>HR Net</h1>
         <div className="links">
            {toggle ? (
               <Link to="/" id="path" onClick={navHome}>
                  Home
               </Link>
            ) : (
               <Link to="/employee-list" id="path" onClick={navList}>
                  View Current Employees
               </Link>
            )}
         </div>
      </header>
   );
};

export default Header;

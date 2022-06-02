import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Handle Toggle
  const [toggle, setToggle] = useState(false);
  // const navList = () => setToggle(!toggle);
  // const navHome = () => setToggle(false);

  return (
    <header>
      <h1>HR Net</h1>
      <div className="links">
        {toggle ? (
          <Link to="/" id="path" onClick={() => setToggle(false)}>
            Home
          </Link>
        ) : (
          <Link
            to="/employee-list"
            id="path"
            onClick={() => setToggle(!toggle)}
          >
            View Current Employees
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

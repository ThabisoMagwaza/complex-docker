import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <h1>Fibonacci Calculator</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/otherPage">Other Page</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;

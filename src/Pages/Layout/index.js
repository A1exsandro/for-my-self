import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <div className="itemsMenu">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/todo">Todo</Link></div>
          <div><Link to="/words">Words</Link></div>
        </div>
      </nav>

      <Outlet />
      <div>
        Here is the LAYOUT PAGE!
      </div>
    </>
  );
}

export default Layout;

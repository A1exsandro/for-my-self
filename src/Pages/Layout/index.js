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
          <div><Link to="/students">Students</Link></div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;

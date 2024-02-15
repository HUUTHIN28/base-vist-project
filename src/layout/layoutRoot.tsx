import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutRoot = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>{" "}
          </li>
          <li>
            <Link to={"/about"}>About</Link>{" "}
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutRoot;

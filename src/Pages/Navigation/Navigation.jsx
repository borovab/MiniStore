import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Navigation.css";
import SearchBox from "../../components/SearchBox/SearchBox";

const Navigation = ({ onSearch }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user-info'));

  const logout = () => {
    localStorage.removeItem('user-info');
    navigate('/login');
  };

  return (
    <>
      <nav id="menu-navigation">
        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/man">Man</Link>
          </li>
          <li>
            <Link to="/woman">Woman</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          <li id="card">
            <Link to="/card">Card</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;

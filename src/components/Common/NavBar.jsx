import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <React.Fragment>
      <Link to="/" className="navlink">
        Back To Home
      </Link>
      <Link to="/emicalc" className="navlink">
        EMI Caculator
      </Link>
      <Link to="/feedback" className="navlink">
        Feedback
      </Link>
      <Link to="/products" className="navlink">
        Products
      </Link>
      <Link to="/counter" className="navlink">
        Counter
      </Link>
      <Link to="/teams" className="navlink">
        My Team
      </Link>
      <Link to="/insurerregister">Insurer Registration</Link>
    </React.Fragment>
  );
};

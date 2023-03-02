import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="logo">
        Bobby<span className="red">DZign</span>
      </a>
      <ul>
        <li>
          <a href="#">Course Details</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Testimonial</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

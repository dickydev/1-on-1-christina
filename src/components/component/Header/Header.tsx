import React from "react";
import Button from "../../ui/Button";

const Header: React.FC = () => {
  return (
    <header>
      <img src="" alt="" />
      <nav className="navbar">
        <ul>
          <li>
            <a href="">Hello</a>
          </li>
          <li>
            <a href="">Hello</a>
          </li>
          <li>
            <a href="">Hello</a>
          </li>
          <li>
            <a href="">Hello</a>
          </li>
          <li>
            <a href="">Hello</a>
          </li>
        </ul>
      </nav>
      <Button width={"100px"}>Let's Talk</Button>
    </header>
  );
};

export default Header;

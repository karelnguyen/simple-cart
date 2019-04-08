import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => (
  <Parent>
    <Link to="/">
      <Button text="COFFEES" />
    </Link>

    <Link to="/cart">
      <Button text="CART" />
    </Link>
  </Parent>
);

const Parent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
`;

export default Navbar;

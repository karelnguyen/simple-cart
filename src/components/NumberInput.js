import React from "react";
import styled from "styled-components";
import Colors from "../colors";

const NumberInput = ({ children }) => (
  <NumberInputWrapper>{children}</NumberInputWrapper>
);

const NumberInputWrapper = styled.div`
  margin-right: 20px;
  input {
    width: 45px;
    height: 42px;
    line-height: 1.65;
    float: left;
    display: block;
    padding: 0;
    margin: 0;
    padding-left: 20px;
    border: 1px solid ${Colors.mint};
    background: transparent;
    color: white;
  }
`;

export default NumberInput;

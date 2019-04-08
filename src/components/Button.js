import React from "react";
import styled from "styled-components";
import Colors from "../colors";

const Button = ({ onClick, text }) => {
  return (
    <BtnWrapper>
      <ButtonDiv onClick={onClick}>{text}</ButtonDiv>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  hr {
    visibility: hidden;
  }
`;

const ButtonDiv = styled.button`
  width: 150px;
  height: 30px;
  box-sizing: border-box;
  background-color: transparent;
  border: 2px solid ${Colors.mint};
  margin: 10px;
  color: white;
  font-family: "Archivo Narrow", sans-serif;
  transition: all 0.5s ease;
  white-space: nowrap

  &:before {
    content: " ";
    border: 2px transparent solid;
    position: absolute;
    left: 5px;
    top: 5px;
    box-sizing: border-box;
    width: 160px;
    height: 40px;
    transition: all 0.7s ease;
  }

  &:active {
    border: 7px transparent solid;
    transition: all 0.1s ease;
  }

  &:hover {
    background-color: ${Colors.darkMint};
    border-radius: 20px;
    cursor: pointer;
    color: white;

    &:before {
      border-radius: 20px;
      border: 2px ${Colors.mint} solid;
    }
  }
`;

export default Button;

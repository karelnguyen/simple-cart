import React from "react";
import styled from "styled-components";
import Colors from "../colors";

const Title = ({ children }) => <H1>{children}</H1>;

const H1 = styled.div`
  color: ${Colors.mint};
  font-size: 40px;
`;

export default Title;

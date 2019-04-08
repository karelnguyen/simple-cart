import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import ProductList from "./containers/ProductList";
import Cart from "./containers/Cart";
import Navbar from "./components/Navbar";
import coffees from "./coffees";

const App = () => (
  <Router>
    <Navbar />
    <Parent>
      <Route
        exact
        path="/"
        component={() => <ProductList coffees={coffees} />}
      />
      <Route path="/cart" component={Cart} />
    </Parent>
  </Router>
);

const Parent = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;

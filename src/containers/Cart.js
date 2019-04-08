import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Title from "../components/Title";
import Colors from "../colors";

const Cart = ({ cart, totalPrice }) => {
  const items = cart.map(item => (
    <div key={item.id}>
      <span>{item.name}</span>
      <span>{`quantity: ${item.quantity}`}</span>
    </div>
  ));
  return (
    <>
      <Title>Cart</Title>
      <h2>{`total price: ${totalPrice}`}</h2>
      <CartWrapper>{cart.length ? items : ""}</CartWrapper>
    </>
  );
};

const totalPrice = data => {
  let helper = data.map(item => {
    return Number(item.price) * Number(item.quantity);
  });
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const final = data.length ? helper.reduce(reducer) : 0;
  return final;
};

const mapStateToProps = state => ({
  cart: state.cart,
  totalPrice: totalPrice(state.cart)
});

const CartWrapper = styled.div`
  width: 80%;
  padding: 30px;
  margin: 20px 0px;
  color: white;
  background-color: ${Colors.darkGrey};
`;

export default connect(mapStateToProps)(Cart);

import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../actions";
import styled from "styled-components";
import Title from "../components/Title";
import Button from "../components/Button";
import NumberInput from "../components/NumberInput";
import Colors from "../colors";

// create your forceUpdate hook. emitting refresh
const useForceUpdate = () => {
  let [value, set] = useState(true); // boolean state
  return () => set(!value); // toggle the state to force render
};

const createFormData = (data = []) => {
  if (!data.length) return;
  let helper = {};
  data.map(item => (helper[item.id] = 1));
  return helper;
};

const totalingPrice = cart => {
  let helper = cart.map(item => {
    return Number(item.price) * Number(item.quantity);
  });
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  let final = cart.length ? helper.reduce(reducer) : 0;
  return final;
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const Cart = ({ dispatch, cart }) => {
  let formData = createFormData(cart);
  let forceUpdate = useForceUpdate();

  const handleClickRemove = (event, item) => {
    event.preventDefault();
    dispatch(
      removeItem({
        id: item.id,
        price: item.price,
        quantity: formData[item.id].value || 1
      })
    );
    forceUpdate();
  };

  const handleClickAdd = (event, item) => {
    event.preventDefault();
    dispatch(
      addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: formData[item.id].value || 1
      })
    );
    forceUpdate();
  };

  const items = cart.map(item => (
    <CardItem key={item.id}>
      <div>
        <div>{item.name}</div>
        <div>{`price: ${item.price}`}</div>
        <div>{`quantity: ${item.quantity}`}</div>
      </div>
      <NumberInput>
        <input
          type="number"
          defaultValue="1"
          ref={node => (formData[item.id] = node)}
          min="1"
        />
      </NumberInput>
      <Button text="ADD" onClick={event => handleClickAdd(event, item)} />
      <Button text="REMOVE" onClick={event => handleClickRemove(event, item)} />
    </CardItem>
  ));
  return (
    <>
      <Title>Cart</Title>
      <CartWrapper>
        <h2>Items:</h2>
        {cart.length ? items : ""}
        <h2>{`total price: ${totalingPrice(cart)}`}</h2>
      </CartWrapper>
    </>
  );
};

const CardItem = styled.div`
  border-left: 2px solid ${Colors.mint}
  min-height: 60px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
  justify-content: space-between;
  align-items: center;
`;

const CartWrapper = styled.div`
  width: 80%;
  padding: 30px;
  margin: 20px 0px;
  color: white;
  background-color: ${Colors.darkGrey};
`;

export default connect(mapStateToProps)(Cart);

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addItem } from "../actions";
import Button from "../components/Button";
import Title from "../components/Title";
import Colors from "../colors";

const createFormData = data => {
  let helper = {};
  data.map(item => (helper[item.id] = 1));
  return helper;
};

const ProductList = ({ dispatch, coffees }) => {
  let formData = createFormData(coffees);

  return (
    <>
      <Title>Coffee list</Title>
      {coffees.map(coffee => {
        return (
          <ProductWrapper key={coffee.id}>
            <div>
              <div>{coffee.name}</div>
              <div>{`Price: ${coffee.price}`}</div>
            </div>
            <div
              style={{ width: "250px", display: "flex", alignItems: "center" }}
            >
              <NumberInput>
                <input
                  type="number"
                  name="quantity"
                  defaultValue="1"
                  ref={node => (formData[coffee.id] = node)}
                  min="1"
                />
              </NumberInput>
              <Button
                text="BUY"
                onClick={e => {
                  e.preventDefault();
                  dispatch(
                    addItem({
                      id: coffee.id,
                      name: coffee.name,
                      price: coffee.price,
                      quantity: formData[coffee.id].value || 1
                    })
                  );
                }}
              />
            </div>
          </ProductWrapper>
        );
      })}
    </>
  );
};

const ProductWrapper = styled.div`
  width: 80%;
  padding: 30px;
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background: ${Colors.darkGrey};
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const NumberInput = styled.div`
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

export default connect()(ProductList);

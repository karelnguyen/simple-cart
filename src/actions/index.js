export const addItem = data => ({
  type: "ADD_ITEM",
  id: data.id,
  name: data.name,
  price: data.price,
  quantity: data.quantity
});

export const removeItem = data => ({
  type: "REMOVE_ITEM",
  quantity: data.quantity,
  id: data.id
});

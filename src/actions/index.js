export const addItem = data => ({
  type: "ADD_ITEM",
  id: data.id,
  name: data.name,
  price: data.price,
  quantity: data.quantity
});

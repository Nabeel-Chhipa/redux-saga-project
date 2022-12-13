import {Add_To_Cart, Empty_Cart, Remove_To_Cart} from './contant'

export const addToCart = (data) => {
  console.log("add to cart action", data);
  return {
    type: Add_To_Cart,
    data
  };
};

export const removeToCart = (data) => {
  console.log('Remove_To_Cart action', data)
  return {
    type: Remove_To_Cart,
    data
  }
}

export const emptyCart = () => {
  return {
    type: Empty_Cart
  }
}

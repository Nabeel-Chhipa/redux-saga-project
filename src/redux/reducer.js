import { Add_To_Cart, Remove_To_Cart } from "./contant";

export const cartData = (data = [], action) => {
  console.log("reducer console", action);

  switch (action.type) {
    case Add_To_Cart:
      console.log("Add To Cart Switch Statement");
      return [...data, action.data];
      break;
    case Remove_To_Cart:
      console.log("Item removed from cart");
      // data.pop()
      {
        data.length == 0
          ? console.log("cart empty")
          : (data.length = data.length - 1);
      }
      return [...data];
    default:
      return data;
      break;
  }
};

import { Add_To_Cart, Empty_Cart, Remove_To_Cart } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case Add_To_Cart:
      return [...data, action.data];
      break;

    case Remove_To_Cart:
      // data.pop()
      {
        data.length == 0
          ? console.log("cart empty")
          : (data.length = data.length - 1);
      }
      return [...data];
      break;
      
      case Empty_Cart:
        {
          data.length == 0
            ? console.log('Cart Empty Successfully')
            : data = []
        }
        return data
        break;
    default:
      return data;
      break;
  }
};

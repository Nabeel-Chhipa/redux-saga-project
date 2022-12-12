export const addToCart = (data) => {
  console.log("add to cart action", data);
  return {
    type: "Add_To_Cart",
    data
  };
};

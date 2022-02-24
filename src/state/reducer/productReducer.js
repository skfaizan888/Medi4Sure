export const productReducer = (state = { products: [], cart: [] }, action) => {
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      products: [...action.data],
    };
  }
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: [...action.data, ...state.cart],
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    const filteredData = state.cart.filter((item) => item.id != action.data);
    return {
      ...state,
      cart: [...filteredData],
    };
  }
  return state;
};

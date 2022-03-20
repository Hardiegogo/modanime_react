export const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return {
        ...state,
        categories: [...action.payload]
      };
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: [...action.payload]
      };
    default:
      return state;
  }
};

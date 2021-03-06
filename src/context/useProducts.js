import { createContext } from "react";
import { useReducer, useContext } from "react";
import { dataReducer } from "../reducers/dataReducer";
const ProductsContext = createContext(null);

export const useProducts = () => useContext(ProductsContext);

const initialState = {
  categories: [],
  products: [],
  filteredProducts: [],
  sortByPrice: "",
  filterByRatings: "",
  categoryActionFigures: null,
  categoryMasks: null,
  categoryTshirts: null,
  isProducts: false,
  slider: 0,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

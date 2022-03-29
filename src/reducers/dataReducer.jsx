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
        products: [...action.payload],
        isProducts:true
      };
    case "PRICE_HIGH_TO_LOW":
      return{
        ...state,
        sortByPrice:action.payload
      }
      case "PRICE_LOW_TO_HIGH":
        return{
          ...state,
          sortByPrice:action.payload
        }
      case "SET_FILTERED_PRODUCTS":
        return{
          ...state,
          filteredProducts:[...action.payload],
          isFilteredProducts:true
        }
      case "FILTER_BY_RATING":
        return{
          ...state,
          filterByRatings:Number(action.payload)
        }
      case "CATEGORY_ACTION_FIGURES":
        return{
          ...state,
          categoryActionFigures:action.payload
        }
        case "CATEGORY_T_SHIRTS":
          return{
            ...state,
            categoryTshirts:action.payload
          }
        case "CATEGORY_MASKS":
          return{
            ...state,
            categoryMasks:action.payload
          }
        case "FILTERS_RESET":
          return{
            ...state,
            sortByPrice:null,filterByRatings:null,categoryActionFigures:null,categoryMasks:null,categoryTshirts:null,isProducts:false,slider:0
          }
        case "SET_SLIDER":
          return{
            ...state,
            slider:Number(action.payload)
          }
    default:
      return state;
  }
};

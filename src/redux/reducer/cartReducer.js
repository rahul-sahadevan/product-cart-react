import { ADDTO_CART,REMOVE_FROM_CART,CHECK_OUT } from "../actions/actionType";

// intial value
const initialState = {
    products:[],
    total:0
};

export const cartReducer = (state = initialState, action) => {
    if (action.type === ADDTO_CART) {
        console.log(action.value.id)
      const newProducts = [...state.products, action.value];
  
      return {
        ...state,
        products: newProducts,
        total:state.total+action.value.price
      };
    }
     else if (action.type === REMOVE_FROM_CART) {
   
      const newProducts = state.products.filter((item, index) => index !== action.value);
  
      return {
        ...state,
        products: newProducts,
        total:state.total-action.item.price
      };
    } 
    else if(action.type === CHECK_OUT){
        return {
            ...state,
            products:[],
            total:0

        }
    }
    else {
      return state;
    }
  };
import { ADDTO_CART,REMOVE_FROM_CART,CHECK_OUT } from "./actionType";

// adding to the cart
export const add_to_cart = (product,id,index)=>{
    return {
        type:ADDTO_CART,
        value:product,
        id:id,
        index:index
    }
}

// removing from the cart
export const remove_from_cart= (index,item)=>{
    return{
        type:REMOVE_FROM_CART,
        value:index,
        item:item
    }
}
// checkout
export const check_out = ()=>{
    return {
        type:CHECK_OUT,
        value:[]
    }
}
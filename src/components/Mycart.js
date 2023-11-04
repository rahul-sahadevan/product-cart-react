import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {remove_from_cart,check_out} from "../redux/actions/actionFuntion";
import { useNavigate } from "react-router-dom";


function Mycart(){
    let[checkout,setCheckout] = useState(false);
    let [checkoutClear,setCheckoutClear] = useState(false);

   const navigate = useNavigate()

   const state = useSelector(state=>state);
   const products = state.products
   const total = state.total
   const dispatch = useDispatch()


// function set the checkout
   function handleCheckout(){
    if(checkout === false){
        setCheckout(true);
    }
    else{
        setCheckout(false);
    }
   }

//    function to clear the mycart page
   function handleCheckoutClear(){
        dispatch(check_out());
        setCheckoutClear(true)
   }
   function handleNavigate(){
        navigate('/')
   }



// html for the mycart page
    return (
        <div className="main-div">
            <div className="card-div">
                <h1>My Cart</h1>
                <br></br>
                {
                    !checkoutClear?(
                        <div className="cart-body">
                            {
                                products && products.map((item,index)=>{
                                    return (<div className="product">
                                    <img className="image" src={item.thumbnail}></img>
                                    <p>{item.title}</p>
                                    <p>{item.price}₹</p>
                                    <p>⭐{item.rating}</p>
                                    <button className="btn" onClick={()=>dispatch(remove_from_cart(index,item))}>Remove from Cart</button>
                                    <br></br>
                                </div>
                                )
                            })

                            }

                        </div>

                    )
                    :
                    (
                        <div className="check-clear">
                            <h1 className="success">Items have been checkout out!</h1>
                            <br></br>
                            <button className="btn2" onClick={handleNavigate}>Go Home</button>
                        </div>

                    )
                }
            </div>
            < div className="main">
                <button onClick={handleCheckout} className="btn">checkout</button>
                {
                    checkout && (

                        <div className="checkout-div">
                            <h3>Check out List</h3>
                            {
                            
                                products && products.map((item)=>{
                                    return (
                                        <div className="checkout-item">
                                            <p>1: {item.title}</p>
                                            <p>${item.price}</p>
                                          
                                        </div>
                                    )
                                })
                                    
                                
                            }
                            <hr></hr>
                            <div className="checkout-item">
                                <p>Total</p>
                                <p>${total}</p>
                            </div>
                            <hr></hr>
                            <br></br>
                            <button className="btn" onClick={handleCheckoutClear}>Click to Checkout</button>
                            
                        </div>
                    )
                }
            </div>


        </div>
    )
}
export default Mycart
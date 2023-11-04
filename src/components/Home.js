import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { add_to_cart } from "../redux/actions/actionFuntion";

import axios from "axios";

function Home(){
    let [products,setProducts] = useState([]);
    let [duplicate,setDuplicate] = useState([]);

    const dispatch = useDispatch();
    const state = useSelector(state=>state);
    const val = state.products

    // function to fetch the products
    async function fetchProducts(){

        try{
            const response = await axios.get('https://dummyjson.com/products');
            console.log(response.data.products)
            setProducts(response.data.products)
        }
        catch(error){
            alert(error)
        }
    }
    // intial fetch on load
    useEffect(()=>{
        fetchProducts()
        
    },[])

    // function avoid the duplicate and dispatching the item
    function handleDispatch(item,index){
        if(duplicate.includes(item.id)){
            alert('item already exist')
        }
        else{
            
            setDuplicate([...duplicate,item.id])
            dispatch(add_to_cart(item,item.id,index))
        }
     
    }


// html code for home page
    return (
        <div>
            
            <h1>All Products</h1>
            <div className="cart-body">
                {
                products &&  products.map((item,index)=>{
                        return (<div className="product">
                            <img className="image" src={item.thumbnail}></img>
                            <p>{item.title}</p>
                            <p>{item.price}₹</p>
                            <p>⭐{item.rating}</p>
                            <button className="btn" onClick={()=>{
                                handleDispatch(item,index)
                            }}>Add to Cart</button>
                            <br></br>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Home
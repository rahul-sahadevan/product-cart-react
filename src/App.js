import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mycart from "./components/Mycart";
import { Routes,Route } from "react-router-dom";
import './style.css'


function App(){
    

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cart" element={<Mycart />}></Route>
            </Routes>
          

        </div>
    )
}
export default App
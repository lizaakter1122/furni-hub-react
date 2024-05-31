import { useState } from "react";
import { useEffect } from "react";
import Product from "../product/Product";
import "./Shop.css"
import Cart from "./Cart";

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    const handleAddToCart = (product) =>{
        
        const newCart = [...cart,product]
        setCart(newCart)
      }

      console.log("cart item", cart)

    useEffect(()=>{
        fetch("./product.JSON")
        .then(res =>res.json())
        .then(data=>setProducts(data))
    },[])


    return (
        <>
        <div className="shop-container">
            {
                products.map(product=><Product handleAddToCart={handleAddToCart} key={product.id} product={product}></Product>)
            }
        </div>
        <Cart cart={cart}></Cart>
        </>
    );
};

export default Shop;
import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [qty, setQty] = useState(1);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    //increase product quantity
    const increaseQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    //decrease product quantity
    const decreaseQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;
            return prevQty - 1;
        })
    }

    // add items to cart
    const onAdd = (product, quantity) =>{
        // increase total quantity
        setTotalQuantity((prevQty) => prevQty + quantity);

        //increase total price of the items
        setTotalPrice((prevPrice) => prevPrice + product.price * quantity);

        //checking if the items already exists in the cart
        const exist = cartItems.find((item)=> item.slug === product.slug);

        if(exist){
            setCartItems(
                cartItems.map((item)=> 
                item.slug === product.slug 
                ? { ...exist, quantity: exist.quantity + quantity } 
                : item)
            )  
        }
        else{
            setCartItems([ ...cartItems, { ...product, quantity: quantity }]);
        }
    }

    //Remove product
  const onRemove = (product) => {
    //Set Total Price
    setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price);

    //Remove from total quantities
    setTotalQuantity((prevQty) => prevQty - 1);

    //Check if product exists
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };


    return(
        <ShopContext.Provider value={ {
            qty, increaseQty, decreaseQty, showCart, setShowCart, cartItems, setCartItems, onAdd, onRemove, totalQuantity, totalPrice, setQty
        } }>{children}</ShopContext.Provider>
    )
};

export const useStateContext = () => useContext(ShopContext);


import React, {createContext, useEffect, useState} from 'react'

const CartContext = createContext({
    cart: [],
    cartLength: 0,
    addToCart: () => { },
    clearCart: ()=> {}
})

export const CartContextProvider = (props) => {

    const [cart, setCart] =  useState(JSON.parse(window.localStorage.getItem('cart') || '[]'))

    const addToCart = (newItem) => {
        const isItemAlreadyExist = cart.some((cartItem) => cartItem.id === newItem.id);
        if (isItemAlreadyExist) {
            setCart((prevState)=> prevState.map((item)=> item.id === newItem.id ? {...item, qty: item.qty+1} : item))
        } else {
            setCart((prevState) => [...prevState, newItem]);
        }

    }

    const clearCart = () => {
        setCart(() => []);
    }

   
 //for save cart in localstorage...

   useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


    console.log(cart);
    const context = {
        cart: cart,
        cartLength: cart.length,
        addToCart: addToCart,
        clearCart: clearCart
    }
    return (<CartContext.Provider value={context}>
        {props.children}
  </CartContext.Provider>
  )
}

export default CartContext;
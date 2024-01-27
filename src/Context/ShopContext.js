import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setcartItem] = useState(getDefaultCart());
    const products_data = all_product;

    const addToCart = (itemId) => {
        setcartItem((prev) => {
            return { ...prev, [itemId]: prev[itemId] + 1 };
        });
    }


    const removeToCart = (itemId) => {
        setcartItem((prev) => {
            return { ...prev, [itemId]: prev[itemId] - 1 };
        });
    }

    const getTotalCartAmount = () => {
        let TotalAmount = 0;
        for (const item in cartItem) {
            // console.log(cartItem[item]);
            if (cartItem[item] > 0) {
                let Iteminfo = products_data.find((product) => product.id === Number(item));
                TotalAmount += Iteminfo.new_price * cartItem[item];
            }
        }
        return TotalAmount;
    }

    const gettotalcartitems = () => {
        let totalItem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    }

    return (
        <ShopContext.Provider value={{ getTotalCartAmount, gettotalcartitems, products_data, cartItem, addToCart, removeToCart }}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

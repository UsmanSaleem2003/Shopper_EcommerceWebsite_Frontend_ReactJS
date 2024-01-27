import React, { useContext, useEffect } from 'react'
import "./CartItems.css";
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'

export default function CartItems() {
    const { getTotalCartAmount, products_data, cartItem, addToCart, removeToCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {products_data.map((e) => {
                if (cartItem[e.id] > 0) {
                    return <div>
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={e.image} className='carticon-product-icon' alt='' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                            <p className='totalprice'>${e.new_price * cartItem[e.id]}</p>
                            <img src={remove_icon} className='cartitems-remove-icon' onClick={() => { removeToCart(e.id) }} alt='' />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cartitems-promocode'>
                    <p>If you have promo code, Enter it here</p>
                    <div className='cartitems-promobox'>
                        <input type='text' placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

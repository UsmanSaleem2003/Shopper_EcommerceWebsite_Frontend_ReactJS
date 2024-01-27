import React, { useContext, useEffect } from 'react'
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext';

export default function ProductDisplay(props) {
    const { product } = props;

    const { cartItem, addToCart } = useContext(ShopContext);

    useEffect(() => {
        // console.log(cartItem);
    }, [cartItem]);


    return (
        <div className='ProductDisplay'>
            <div className='productDisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
                <div className='productDiplay-img'>
                    <img className="productDisplay-main-img" src={product.image} alt='' />
                </div>
            </div>
            <div className='productDisplay-right'>
                <h1>{product.name}</h1>
                <div className='productDisplay-right-star'>
                    <img src={star_icon} alt='feedbackstar' />
                    <img src={star_icon} alt='feedbackstar' />
                    <img src={star_icon} alt='feedbackstar' />
                    <img src={star_icon} alt='feedbackstar' />
                    <img src={star_dull_icon} alt='feedbackstar' />
                    <p>(122)</p>
                </div>
                <div className='productDispay-right-prices'>
                    <div className='productDisplay-right-price-old'>
                        ${product.old_price}
                    </div>
                    <div className='productDisplay-right-price-new'>
                        ${product.old_price}
                    </div>
                </div>
                <div className='productDisplay-right-description'>
                    A lightweight, usually knitted, pullover shirt, close-fitting and with
                    a round neckline and short sleeves, worn as an undershirt or an  outer
                    garment.
                </div>
                <div className='productDisplay-right-size'>
                    <h1>Select Size</h1>
                    <div className='productDisplay-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }} >ADD TO CART</button>
                {/* <p className='productDisplay-right-category'> <span className='categories' >Category : </span>{product.category} </p> */}
                <p className='productDisplay-right-category2'> <span className='categories' >Tags : </span>Modern, Latest </p>
            </div>
        </div>
    )
}

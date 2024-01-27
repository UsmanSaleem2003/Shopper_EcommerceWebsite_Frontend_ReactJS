import React, { useContext } from 'react'
import './css/Product.css'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrump from '../Components/Breadcrumps/Breadcrump';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts"

export default function Product() {
    const { products_data } = useContext(ShopContext);
    const { productId } = useParams();
    const product = products_data.find((e) => e.id === Number(productId));

    return (
        <div className='Product'>
            <Breadcrump product={product} />
            <ProductDisplay product={product} />
            <RelatedProducts />
        </div>
    )
}

import React from 'react'
import "./Breadcrump.css";
// import arrow_icon from "../Assets/breadcrum_arrow.png"
import { RightOutlined } from '@ant-design/icons';

export default function Breadcrump(props) {
    const { product } = props;

    return (
        <div className='Breadcrump'>
            Home <RightOutlined /> <span className='linkk'>Shop </span><RightOutlined /> <span className='linkk'> {product.category} </span> <RightOutlined /> {product.name}
        </div>
    )
}

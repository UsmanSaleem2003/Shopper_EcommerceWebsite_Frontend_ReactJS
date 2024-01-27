import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { NavLink } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext';

export default function Navbar() {

    const [hrline, sethrline] = useState("shop");
    const { gettotalcartitems } = useContext(ShopContext);



    return (
        <div className='navbar'>

            <div className='nav_logo'>
                <img src={logo} alt='' />
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <p>Shopper</p>
                </NavLink>
            </div>

            <ul className='nav_menu'>
                <li onClick={() => { sethrline("shop") }} > <NavLink to='/' style={{ textDecoration: 'none', color: hrline === "shop" ? "rgb(182, 182, 83)" : 'rgb(119, 119, 53)' }} > Shop </NavLink > {hrline === "shop" ? <hr /> : <></>} </li >
                <li onClick={() => { sethrline("kids") }} > <NavLink to='/kids' style={{ textDecoration: 'none', color: hrline === "kids" ? "rgb(182, 182, 83)" : 'rgb(119, 119, 53)' }} > Kids </NavLink> {hrline === "kids" ? <hr /> : <></>} </li>
                <li onClick={() => { sethrline("women") }} > <NavLink to='/women' style={{ textDecoration: 'none', color: hrline === "women" ? "rgb(182, 182, 83)" : 'rgb(119, 119, 53)' }} > Women </NavLink> {hrline === "women" ? <hr /> : <></>} </li >
                <li onClick={() => { sethrline("men") }} > <NavLink to='/men' style={{ textDecoration: 'none', color: hrline === "men" ? "rgb(182, 182, 83)" : 'rgb(119, 119, 53)' }} > Men </NavLink> {hrline === "men" ? <hr /> : <></>} </li>
            </ul>

            <div className='nav-login-cart'>
                <NavLink to="/login">
                    <button>
                        <UserOutlined className='userIcon' />Signup
                    </button>
                </NavLink>

                <NavLink to="/cart">
                    <Badge count={gettotalcartitems()} style={{ color: 'white', background: 'red', borderColor: 'red' }}>
                        <ShoppingCartOutlined className='badge' style={{ fontSize: '50px' }} />
                    </Badge>
                </NavLink>

            </div>
        </div >
    )
}
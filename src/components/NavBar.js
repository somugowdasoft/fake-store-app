import React from 'react'
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';

function NavBar({ cartCount }) {
    return (
        <nav className='bg-custom-gradient flex items-center sticky top-0'>
            <a href='/'>
                <img
                    src={logo}
                    alt="Store Logo"
                    className="h-20 w-20 mr-2 flex items-center"
                />
            </a>

            <div className=''>
                <NavLink to="/" 
                // className="rounded-md bg-custom-gradient px-3 py-2 mr-5 text-sm font-medium text-white hover:bg-gradient-isInCart "
                className={({ isActive }) =>
                    `rounded-md px-3 py-2 mr-5 text-sm font-medium ${isActive ? 'bg-custom-gradient text-white' : 'bg-custom-gradient text-black '}`
                  }
                >
                    Products
                </NavLink>
                <NavLink to="/cart"  className={({ isActive }) =>
                    `rounded-md px-3 py-2 mr-5 text-sm font-medium relative ${isActive ? 'bg-custom-gradient text-white' : 'bg-custom-gradient text-black'}`
                  }>
                    Cart
                    {cartCount > 0 && (
                        <span className="absolute -top-3 -right-2 bg-custom-gradient rounded-full h-6 w-6 text-xs flex items-center justify-center">
                            {cartCount}
                        </span>
                    )}
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar;
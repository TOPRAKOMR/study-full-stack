import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>

        {/* <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/products'>Products</a> */}

        <Link to="/">Home</Link>
        <NavLink to="/about" className={({isActive})=>isActive ? styles.activeStyle: undefined}>
        About
        </NavLink>
        <NavLink to="/products" className={({isActive})=>isActive ? styles.activeStyle: undefined}>
        Products
        </NavLink>


    </div>
  )
}

export default Navbar
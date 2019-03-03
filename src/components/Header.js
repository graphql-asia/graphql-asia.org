import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import GraphlQLAsiaLogo from '../assets/images/GraphlQLAsiaLogo.png'
import Menu from './Menu'
const Header = (props) => (
    <header id="header" className="">        
        <span>GraphQL</span>
        <Link to="/" className="logo">            
            <img src={GraphlQLAsiaLogo} alt="GraphQL Asia Logo" />              
        </Link>
        <span>Asia</span>          
        <nav>
            <Menu />
            {/* <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a> */}
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header

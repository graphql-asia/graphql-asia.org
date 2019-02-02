import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import GraphlQLAsiaLogo from '../assets/images/GraphlQLAsiaLogo.png'
const Header = (props) => (
    <header id="header" className="alt">        
        <Link to="/" className="logo">
            <img style={{
                width: '55px',
                height: '55px',
                display: 'inline',
                verticalAlign: 'middle'
            }} src={GraphlQLAsiaLogo} alt="GraphQL Asia Logo" />
            <strong>GraphQL Asia</strong>
        </Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header

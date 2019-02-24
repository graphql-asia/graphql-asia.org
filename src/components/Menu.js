import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <div id="newmenu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/speakers">Speakers</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/agenda">Agenda</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/tickets">Tickets</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/venue">Venue</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/sponsor">Sponsor</Link></li>
            </ul>
            <ul className="actions vertical">
                {/* <li><a href="#" className="button special fit">Get Started</a></li> */}
                {/* <li><a href="#" className="button fit">Log In</a></li> */}
            </ul>
        </div>
        {/* <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a> */}
    </div>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu

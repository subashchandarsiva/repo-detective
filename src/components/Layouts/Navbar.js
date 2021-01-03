import React from 'react';
import PropTypes from 'prop-types'


 const Navbar =({icon,title})=> {
        return (
            <nav className="navbar bg-primary">
                <i className={icon}>{title}</i> 
            </nav>
        )
    
}
Navbar.defaultProps ={
    title:"Repo-Finder",
    icon:"fab fa-github"
}
Navbar.propTypes ={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

export default Navbar

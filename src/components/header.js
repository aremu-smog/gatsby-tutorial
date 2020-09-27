import {Link} from "gatsby"
import React from "react"
import headerStyles from "./header.module.scss"

const Header = () => {
    return(
        <nav>
        <Link to="/" className={headerStyles.link} activeClassName={headerStyles.activeLink}>Home</Link> 
            <Link to="/about" className={headerStyles.link} activeClassName={headerStyles.activeLink}>About</Link>
            <Link to="/" className={headerStyles.link} activeClassName={headerStyles.activeLink}>Contact</Link>
        </nav>
    )
}

export default Header
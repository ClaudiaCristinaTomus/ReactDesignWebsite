import React,{useState} from 'react'
import "./Navbar.scss"
import {DiJqueryLogo} from 'react-icons/di'
import {FiMenu} from 'react-icons/fi'
import {GrClose} from "react-icons/gr"

const Navbar = () => {
    const [click,setClicked]=useState(false);
    const [showNav,setShowNav] = useState(false);

    const handleClick = () =>{
        setClicked(!click);
    }
    const handleCloseMobileMenu=()=>{
        setShowNav(!click);
    }

    return (
       
            <nav className={showNav ? "navbar-container": "navbar-container active"}>
                <a href="/" className="navbar-logo">
                    <DiJqueryLogo/>
                
                </a>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <GrClose/> :<FiMenu/>}
                   
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-link-items" onClick={handleCloseMobileMenu}>
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-link-items" onClick={handleCloseMobileMenu}>
                        <a href="#interior" className="nav-link">Interior Design</a>
                    </li>
                    <li className="nav-link-items" onClick={handleCloseMobileMenu}>
                        <a href="#exterior" className="nav-link">Exterior Design</a>
                    </li>
                    <li className="nav-link-items" onClick={handleCloseMobileMenu}>
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
      
    )
}

export default Navbar
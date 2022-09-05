import React, { useEffect, useState } from 'react'
import "./Header.css"
import { Link } from "react-scroll";



function Header() {
    const [navShadow, setNavShadow] = useState(false);



    const changeNav = () => {
        if (window.scrollY > 0) {
            setNavShadow(true)
            return;
        }
        setNavShadow(false)
    }

    // useEffect(() => {
    //     window.addEventListener("scrool", changeNav)

    //     return () => window.removeEventListener("scroll", changeNav)


    // }, [])


    window.addEventListener("scroll", changeNav);

    return (
        <div className={navShadow ? 'header-active' : 'header'}>
            <nav>
                <ul id='navLink'>
                    <Link to="home" activeClass="active" spy={true} smooth={true} duration={500} offset={-60}>
                        <li className='tag'><h4>Home</h4></li>
                    </Link>
                    <Link to="skills" activeClass="active" spy={true} smooth={true} duration={500} offset={-59}>
                        <li className='tag'><h4>Skills</h4></li></Link>
                    <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500} offset={-55}>
                        <li className='tag'><h4>Projects</h4></li></Link>
                    <Link to="experience" activeClass="active" spy={true} smooth={true} duration={500} offset={-49}>
                        <li className='tag'><h4>Experience</h4></li></Link>
                    <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500} offset={-48}>
                        <li className='tag'><h4>Contact</h4></li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header
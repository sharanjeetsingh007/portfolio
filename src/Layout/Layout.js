import React from 'react'
import Experience from '../Components/Experience/Experience';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import Skills from '../Components/Skills/Skills';
// import waterColor from "../Assets/watercolor.jpeg"
import "./Layout.css"
import Projects from "../Components/Projects/Projects"
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';


function Layout() {
    return (
        <div className='Layout'>
            {/* <div className='absolute__image'>
                <img src={waterColor} />
            </div> */}
            <Header />
            <Home />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />

        </div>
    )
}

export default Layout
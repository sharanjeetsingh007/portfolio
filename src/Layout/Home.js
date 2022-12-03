import React from 'react'
import "./Home.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Resume from "../../Assets/Resume.pdf"
import { Link } from "react-scroll";
import { BsChevronDown } from 'react-icons/bs';
import { bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    bounce: {
        animationName: bounce,
        animationDuration: '1s',
        display: "block",

    }
})


function Home() {
    return (
        <div className='home' id="home">
            hiii
        </div>
    )
}

export default Home
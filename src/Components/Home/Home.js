import React from 'react'
import "./Home.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Resume from "../../Assets/Resume.pdf"







function Home() {
    return (
        <div className='home' id="home">
            <div className='home__main'>

                <div className='intro__description'>
                    <h1>Sharan<span>jeet Singh</span></h1>
                    <p>Full stack developer</p>
                    <div className='socialmedia___btn'>
                        <IconButton aria-label="github link"
                            href='https://github.com/sharanjeetsingh007'
                            target="_blank"
                        >
                            <GitHubIcon style={{ fontSize: "35px", color: "white" }} />
                        </IconButton>
                        <IconButton aria-label="linkedIn link"
                            href='http://www.linkedin.com/in/sharanjeet--singh'
                            target="_blank"

                        >
                            <LinkedInIcon style={{ fontSize: "35px", color: "white" }} />
                        </IconButton>
                    </div>
                    <div className='resume'>
                        <p>My Resume</p>
                        <Button variant="outlined"
                            className='resume__btn'
                            href={Resume}
                            target="_blank"
                            style={{ color: "white", border: '1px solid white', fontSize: "13px" }}
                        >Resume</Button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home
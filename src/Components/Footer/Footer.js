import React from 'react'
import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';






function Footer() {
    return (
        <div className='Footer'>

            <div className='footer__main'>
                <div className='col-1'>
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
                <div className='col-2'>
                    <div className='content'>
                        <p>Sharanjeet Singh</p>
                        <p>An aspiring Developer</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
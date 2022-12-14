import React from 'react'
import CardSkill from '../CardSkill/CardSkill'
import "./Skills.css"
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { DiReact } from 'react-icons/di';
import { DiPython } from 'react-icons/di';
import { DiMysql } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';
import { SiAmazonaws } from 'react-icons/si';
import { SiMicrosoftazure } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-scroll";




function Skills() {
    return (
        <div className='Skills' id="skills">
            <div className='skills__main'>
                <div className='heading'>
                    <h3>Skills</h3>
                    <Link
                        to="projects" activeClass="active" spy={true} smooth={true} duration={500} offset={-53}
                    > <IconButton className="scroll__btn" aria-label="scroll-down">
                            <ExpandMoreIcon
                                style={{ fontSize: "35px", color: "black" }}
                            />
                        </IconButton>
                    </Link>
                </div>


                <div className='cards__skills'>
                    <CardSkill
                        Icon={<HtmlIcon style={{ fontSize: "50px", color: '#69BAD9' }} />}
                        Desc={"More than 1 year experience in using HTML and HTML5 with creating and writing standard way for better readability "} />
                    <CardSkill
                        Icon={<CssIcon style={{ fontSize: "50px", color: '#69BAD9' }} />}
                        Desc={"More than 1 year experience in using CSS and CSS 5 with front end frame works like taillwind, mui and style component"}
                    />
                    <CardSkill
                        Icon={<JavascriptIcon style={{ fontSize: "50px", color: '#69BAD9' }} />}
                        Desc={"More than 1 year experience in using JavaScript for making website web apps"}
                    />
                    <CardSkill
                        Icon={<DiReact style={{ fontSize: "50px", color: '#69BAD9' }} />}
                        Desc={"More than 1 year experience in using React.js for making website and web apps with efficient perfomance and readable code"}
                    />
                    <CardSkill
                        Icon={<DiPython style={{ fontSize: "50px", color: '#69BAD9' }} />}
                        Desc={"Familiar with the language and utlizing for making Back end as well as Data analysis "}
                    />
                    <CardSkill
                        Icon={<SiRedux style={{ fontSize: "50px", color: '#69BAD9' }} />}
                        Desc={"Experience state management libraru like Redux, Context API"}
                    />
                    <CardSkill
                        Icon={<DiMysql style={{ fontSize: "50px", color: '#69BAD9' }} />}
                        Desc={"Experienced with MySql for creating databases including Schema as well as Queries "}
                    />
                    <CardSkill
                        Icon={<SiMongodb style={{ fontSize: "50px", color: '#69BAD9' }} />}
                        Desc={"Experienced using MongoDB for creating Un-relational databases including schema, configuration and maintanance"}
                    />
                    <CardSkill
                        Icon={<SiAmazonaws style={{ fontSize: "50px", color: '#69BAD9' }} />}
                        Desc={"Experienced using AWS for creating servers S3 bucket as well as using AWS lambda and Docker services"}
                    />
                    <CardSkill
                        Icon={<SiMicrosoftazure style={{ fontSize: "50px", color: '#69BAD9' }} />}
                        Desc={"Experienced in Azure for creating server and API management tools and configuring and maintanance of CI/CD pipline"}
                    />




                </div>

            </div>


        </div >
    )
}

export default Skills
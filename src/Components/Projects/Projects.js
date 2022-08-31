import React, { useEffect, useState } from 'react'
import "./Projects.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SliderProjects from '../SliderProjects/SliderProjects';
import { Zoom } from 'react-reveal';
import projectBg from "../../Assets/project_bg2.jpeg"
import back from "../../Assets/back4.png"

import Button from '@mui/material/Button';




function Projects() {

    const [value, setValue] = useState(0)
    const [expanded, setExpanded] = useState(false);
    const [initialSlide, setInitialSlide] = useState(0)





    const changeInitalSlide = (value) => {
        setInitialSlide(value)
    }


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);

        // console.log(event, "event")
    };


    useEffect(() => {
        setInitialSlide(0)
    }, [value])

    console.log(value, "value projects")
    return (
        <div className='Projects' id="projects">
            <div className='background__image'>
                <img src={back}
                    alt="background_image" />
            </div>

            <div className='projects__main'>
                <div className='heading'>
                    <h3>Projects</h3>
                </div>
                <Zoom duration={400}>

                    <div className={value == 0 ? 'projects__wrapper' : 'projects__wrapper-active'}>

                        <div className={value == 0 ? 'left__col-active ' : 'left__col'}
                        // style={{ flex: value == 0 ? "1" : ".5" }}
                        >
                            <Accordion
                                className='accordin'

                                expanded={expanded === 'panel2'} onChange={handleChange('panel2')}

                                onClick={() => {
                                    if (value === 1) {
                                        setValue(0)
                                    } else {
                                        setValue(1)

                                    }

                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography><h4>Gmail Clone</h4></Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    onClick={e => e.stopPropagation()}

                                >
                                    <Typography>
                                        The project is created to demonstrate Front-end skills and back-end skills with poopular BASS third party
                                        services (Firebase), which including Google Authentication as well as
                                        Creating Reading operation and hosting using firebase and EmailJs.
                                        <br /> Tech stack - React.js, JavaScript, HTML 5, CSS 3, Firebase, EmailJs



                                    </Typography>
                                    <Button className='demo' variant="contained"
                                        style={{ width: "18%", marginTop: "15px", padding: "4px" }}
                                        href="https://clone-74edc.web.app/"
                                        target="_blank"
                                    >D<span style={{ textTransform: "lowercase" }}>emo</span></Button>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                className='accordin'
                                expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                                onClick={() => {
                                    if (value === 2) {
                                        setValue(0)
                                    } else {
                                        setValue(2)

                                    }
                                    // setInitialSlide(0)
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography><h4>Canteen Management System</h4></Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    onClick={e => e.stopPropagation()}
                                >
                                    <Typography>
                                        The project was create as an Group Project under the part of bachelors degree, it is created for the scenario of Canteen in the Unis and collage.
                                        It has the functality of CRUD operations with Admin and User Role Authentication and Authorization.
                                        It also includes Wallet and Cart system for Payment and orders.
                                        <br /> Tech stack - React.js, JavaScript, HTML 5, CSS 3, Firebase
                                    </Typography>
                                    <Button className='demo' variant="contained"
                                        style={{ width: "18%", marginTop: "15px", padding: "4px" }}
                                        href="https://canteen-management-syste-cf0b8.web.app/"
                                        target="_blank"
                                    >D<span style={{ textTransform: "lowercase" }}>emo</span></Button>

                                </AccordionDetails>
                            </Accordion>


                            <Accordion
                                className='accordin'

                                expanded={expanded === 'panel4'} onChange={handleChange('panel4')}

                                onClick={() => {
                                    if (value === 4) {
                                        setValue(0)
                                    } else {
                                        setValue(4)

                                    }

                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography><h4>LinkedIn Clone</h4></Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    onClick={e => e.stopPropagation()}
                                >
                                    <Typography>
                                        The project is inspired by th eoriginal LinkedIn App with the functionality of CRUD operations
                                        and as well as Google Authentication + manual Authentication and Authorization with email. It also includes image and video uploadation using
                                        Firebase Realtime database and Firestore.
                                        <br />Tech stack: React.js, javaScript, HTML5, CSS3, mui
                                    </Typography>
                                    <Button className='demo' variant="contained"
                                        style={{ width: "18%", marginTop: "15px", padding: "4px" }}
                                        href="https://linkedin-a79f4.web.app/"
                                        target="_blank"
                                    >D<span style={{ textTransform: "lowercase" }}>emo</span></Button>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                className='accordin'

                                expanded={expanded === 'panel3'} onChange={handleChange('panel3')}

                                onClick={() => {
                                    if (value === 3) {
                                        setValue(0)
                                    } else {
                                        setValue(3)

                                    }

                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography><h4>Google Maps 2.0</h4></Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    onClick={e => e.stopPropagation()}

                                >
                                    <Typography>
                                        The project is created to demonstrate front-end skills and usage of diffrent API's to work with Geo location and navigation with Google Maps.
                                        The project has include search, neaby (Restaurants,gyms, university) functionality using Google Maps and also includes the Navigation for Point A to Point B with differnt transit options.
                                        <br /> Tech stack - React.js, JavaScript, HTML 5, CSS 3, Google Maps API

                                    </Typography>
                                    <Button className='demo' variant="contained"
                                        style={{ width: "18%", marginTop: "15px", padding: "4px" }}
                                        href="https://glowing-salamander-a167ee.netlify.app/"
                                        target="_blank"
                                    >D<span style={{ textTransform: "lowercase" }}>emo</span></Button>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                className='accordin'

                                expanded={expanded === 'panel5'} onChange={handleChange('panel5')}

                                onClick={() => {
                                    if (value === 5) {
                                        setValue(0)
                                    } else {
                                        setValue(5)

                                    }

                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography><h4>Blog App</h4></Typography>

                                </AccordionSummary>
                                <AccordionDetails
                                    onClick={e => e.stopPropagation()}
                                >
                                    <Typography>
                                        The project is create to show Full-stack skills buy designing, building and testing application for Front-end and Back-end.
                                        The Blog app have the functionality of - Creating, Reading, Updating and Deleting for blog and related Comments of indivudal blog. Autentication and Authorization uing JWT token.
                                        <br /> Tech stack - React.js, HTML 5, CSS 3 ,Node.js, Express.js, JWT
                                    </Typography>
                                    <Button className='demo' variant="contained"
                                        style={{ width: "18%", marginTop: "15px", padding: "4px" }}
                                        href="https://blog-app-sharan.herokuapp.com/"
                                        target="_blank"
                                    >D<span style={{ textTransform: "lowercase" }}>emo</span></Button>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                className='accordin'
                                expanded={expanded === 'panel6'} onChange={handleChange('panel6')}
                                onClick={() => {
                                    if (value === 6) {
                                        setValue(0)
                                    } else {
                                        setValue(6)

                                    }

                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography><h4>Quiz App</h4></Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    onClick={e => e.stopPropagation()}
                                >
                                    <Typography>
                                        This is a Quiz app, people can take general knowledge quiz with two differnet modes (Practice and Test mode). This app is created to demonstrate front-end skills as well as logic building skills.
                                        <br />Tech stack - React.js, HTML5 , Css3, and different Api's calls
                                    </Typography>
                                    <Button className='demo' variant="contained"
                                        style={{ width: "18%", marginTop: "15px", padding: "4px" }}
                                        href="https://lustrous-mermaid-becb93.netlify.app/"
                                        target="_blank"
                                    >D<span style={{ textTransform: "lowercase" }}>emo</span></Button>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                className='accordin'
                                expanded={expanded === 'panel7'} onChange={handleChange('panel7')}
                                onClick={() => {
                                    if (value === 7) {
                                        setValue(0)
                                    } else {
                                        setValue(7)

                                    }

                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography><h4>Weather App</h4></Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    onClick={e => e.stopPropagation()}
                                >
                                    <Typography>
                                        This project is created to demonstarate web dev skills by using differnt API's and
                                        utilizing them to showcase today's weather and forcast for 5 days with different background images.
                                        <br /> Tech stack - React.js, JavaScript, HTML 5, CSS 3, Rest API's

                                    </Typography>
                                    <Button className='demo' variant="contained"
                                        style={{ width: "18%", marginTop: "15px", padding: "4px" }}
                                        href="https://legendary-blancmange-49be4b.netlify.app/"
                                        target="_blank"
                                    >D<span style={{ textTransform: "lowercase" }}>emo</span></Button>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                        <div className={value == 0 ? 'right__col-unactive' : 'right__col'}
                        // style={{ display: value == 0 ? "none" : "flex" }}
                        >
                            {/* <img src={Gmail} />    */}
                            <SliderProjects
                                projectSelected={value}
                                initialSlide={initialSlide}
                                changeInitalSlide={changeInitalSlide}

                            />

                        </div>
                        {/* <ProjectCard image={Gmail} /> */}
                        {/* <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard /> */}



                    </div>
                </Zoom>
            </div>

        </div >
    )
}

export default Projects
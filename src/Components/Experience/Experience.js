import React from 'react'
import "./Experience.css"
import SubWaterColor from "../../Assets/1.jpeg"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';




function Experience() {
    return (
        <div className='Experience' id="experience">
            <div className='experience_background_image'>
                <img src={SubWaterColor} alt="background_image" />
            </div>
            <div className='experience__main'>
                <div className='heading'>
                    <h3>Experience</h3>
                </div>

            </div>
            <div className='timeline'>
                <VerticalTimeline
                    lineColor={"black"}

                >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        textClassName={"timeline__custom"}
                        contentStyle={{
                            borderTop: '4px solid rgb(233, 30, 99)'
                        }}
                        icon={<SchoolIcon />}
                        date="2022 - Till Date"
                        style={{ margin: '20px' }}
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

                    >
                        <h3 className="vertical-timeline-element-title">Professional Year IT</h3>
                        <h4 className="vertical-timeline-element-subtitle">Navita's Professional</h4>
                        <p>
                            Creative Direction, Leadership skills improvement, Australian work standard, Code of Conduct,
                            Team Management skills, Project Management
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        textClassName={"timeline__custom"}
                        contentStyle={{
                            borderTop: '4px solid rgb(33, 150, 243)'
                        }}

                        date="Sep 2021 - Dec 2021"
                        style={{ margin: '20px' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Front-end Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Reesby</h4>
                        <h4>Melbourne,Australia</h4>
                        <p>
                            Designing the UI/UX of the web applications it also included Developing robust applications using new technologies (React.js, Redux, HTML, CSS, Tailwind CSS).
                            and Developing backend of the applications as per need (Node.js, Express, Mysql)
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        textClassName={"timeline__custom"}
                        contentStyle={{
                            borderTop: '4px solid rgb(33, 150, 243)'
                        }}
                        date="Feb 2021 - Jun 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                        style={{ margin: '20px' }}

                    >
                        <h3 className="vertical-timeline-element-title">Full-stack Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Swan Foresight</h4>
                        <h4>Melbourne,Australia</h4>

                        <p>
                            Developing front-end of applications with new technologies (React.js, Redux, HTML, CSS, Sass,
                            Tailwind CSS) including backend applications using Node.js, MongoDB, and express.js also maintain and enhance cloud platform (AWS, Azure) using for API management, Deployment, and CI/CD
                            pipeline and setting up the server (Windows, Linux) and migrating the applications as per request.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Nov 2019 - Nov 2021"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                        style={{ margin: '20px' }}
                        textClassName={"timeline__custom"}
                        contentStyle={{
                            borderTop: '4px solid rgb(233, 30, 99)'
                        }}

                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Information and Communication Technology</h3>
                        <h4 className="vertical-timeline-element-subtitle">University of Sunshine Coast</h4>
                        <h4 className="vertical-timeline-element-subtitle">Melbourne, Australia</h4>

                        <p>
                            The degree focuses on developing overall skills in the field of IT. The core subject include were Software Development, Data Analysist, Business Analysist, Network design and Agile development
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Jun 2018 - Jun 2019"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                        style={{ margin: '20px' }}
                        textClassName={"timeline__custom"}
                        contentStyle={{
                            borderTop: '4px solid rgb(233, 30, 99)'
                        }}

                    >
                        <h3 className="vertical-timeline-element-title">Diploma of IT</h3>
                        <h4 className="vertical-timeline-element-subtitle">Australian Technical Management College</h4>
                        <h4 className="vertical-timeline-element-subtitle">Melbourne, Australia</h4>

                        <p>
                            Basic of information technology with the project on the Rdbms, business management, web developer, database management and disaster recovery
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<StarIcon />}
                        style={{ margin: '20px' }}

                    />
                </VerticalTimeline>

            </div>
        </div>
    )
}

export default Experience
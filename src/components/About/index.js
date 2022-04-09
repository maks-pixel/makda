import React from 'react';
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiMysql,
    DiAngularSimple,
    DiHeroku,
    DiCss3,
    DiPostgresql
} from "react-icons/di";
import {
    SiVisualstudiocode,
    SiApollographql,
    SiExpress
} from "react-icons/si";
function About(){ 
    return (
        <section className='about'>
            <div className='about-container'>
                <div className='image-container'>
                <iframe src="https://giphy.com/embed/3oEjI6vws7veQwubdu" width="338" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/animation-illustration-peace-3oEjI6vws7veQwubdu">via GIPHY</a></p>
                </div>
                <div className='about-bio'>
                    <h3>Some things about Me</h3>
                    <p>
                        I am a Junior Web developer with a background in sales and customer service along with a full stack certificate from the University of Toronto. I am passionate and excited about honing my skills in HTML5, CSS, JavaScript, jQuery, Node.js, React, Express, MySQL and a bit of Python. With my experience in the bootcamp full stack projects, I have learned how to plan effectively using kanban boards and clear communication so that we identify and utilize everyone's strengths to meet tight deadlines. I look forward to learning and growing my skills as a developer and to build applications and work on projects that can help people and make a user's experience so much smoother. My professional experience deals a lot with customer satisfaction which requires understanding the needs of the person through effective communication. Using the skills I have gained in communication I can assure that my work meets user satisfaction and makes the user experience more pleasant.
                    </p>
                </div>
                
            </div>
            <div className="lang-container">
                <h3>Technologies</h3>
                    <Row>
                        <Col xs={4} md={2} className="tech-icons">
                            <DiJavascript1 />
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <DiCss3 />
                        </Col>
                        
                        <Col xs={4} md={2} className="tech-icons">
                            <DiReact />

                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <DiNodejs />
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <DiMongodb />
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <DiGit />
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <DiMysql />

                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <SiExpress />
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            < SiApollographql/>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <DiHeroku />
                        </Col>
                        
                        <Col xs={4} md={2} className="tech-icons">
                            <DiPostgresql />
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                            <SiVisualstudiocode />
                        </Col>

                    </Row>
                </div>
        </section>

    );
}

export default About;
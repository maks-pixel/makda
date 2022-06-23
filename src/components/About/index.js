import React from 'react';
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiMysql,
    DiHeroku,
    DiCss3,
    DiPostgresql
} from "react-icons/di";
import {
    SiVisualstudiocode,
    SiApollographql,
    SiExpress
} from "react-icons/si";
function About() {
    return (
        <section className='about'>
            <div className='about-container'>
            <div className ='image-container'>
                    <img className='image' src={require('../../assets/images/maks.jpg')} alt='creator'/>
                </div>
                <div className='about-bio'>
                    <h2>A Bit about me</h2>
                    <p>
                       
                    I have always been interested in code. I spent a good portion of the pandemic teaching myself the basics but with all that isolation had me desiring a more structured educational environment and community. Well I definitely got that, I recently got a full stack bootcamp certificate from the University of Toronto. My passion for web development has grown so much in the last two years. I am excited about honing my skills in HTML5, CSS, JavaScript, jQuery, Node.js, React, Express, MySQL along with learning new technologies.<br/><br/>
                    But there is more to me than just web development. I am a photographer, barista, and HUGE NERD! If I'm not engulfed in my next project, I am reading, perfecting my latte art, watching anime or biking around the city trying to find something beautiful to capture.<br/><br/>
                    I want to bring more multifaceted POC women into tech spaces. I am motivated to grow and learn, to build more applications and work on projects that can help people. I believe having a more diverse group of people can cultivate more innovation and creativity in this industry. As a woman of colour with a background in customer service, business administration and marketing I have a very unique perspective. I know that along with great communication skills, time management and a great foundation in full stack web development that the bootcamp has provided for me, i have great potential in this field.
 </p>
                </div>

            </div>
            <div className="lang-container">
                <h1>Technologies</h1>
                <div className="icon-container">
                <Row>
                    <Col xs={4} md={4} className="tech-icons">
                        <DiJavascript1 />
                    </Col>
                    <Col xs={4} md={4} className="tech-icons">
                        <DiCss3 />
                    </Col>

                    <Col xs={4} md={4} className="tech-icons">
                        <DiReact />

                    </Col>
                    <Col xs={4} md={4} className="tech-icons">
                        <DiNodejs />
                    </Col>
                    <Col xs={4} md={4} className="tech-icons">
                        <DiMongodb />
                    </Col>
                    <Col xs={4} md={4} className="tech-icons">
                        <DiGit />
                    </Col>
                    <Col xs={4} md={4} className="tech-icons">
                        <DiMysql />

                    </Col>
                    <Col xs={4} md={4} className="tech-icons">
                        <SiExpress />
                    </Col>
                    <Col xs={4} md={4} className="tech-icons">
                        < SiApollographql />
                    </Col>
                    <Col xs={4} md={4} className="tech-icons">
                        <DiHeroku />
                    </Col>

                    <Col xs={4} md={4} className="tech-icons">
                        <DiPostgresql />
                    </Col>
                    <Col xs={4} md={4} className="tech-icons">
                        <SiVisualstudiocode />
                    </Col>

                </Row>
            </div>
            </div>
        </section>

    );
}

export default About;
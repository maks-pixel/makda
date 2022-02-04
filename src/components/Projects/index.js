import React from 'react';
import Card from 'react-bootstrap/card';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';



function Projects() {
    const project = [
        {
            title: 'OkCreature',
            image: 'OkCreature.png',
            link: 'https://github.com/maks-pixel/pet-matcher',
            deploy:'https://okcreature.herokuapp.com/'
        },
        {
            title: 'Pantry-Remover',
            image: 'pantry-remover.png',
            link: 'https://github.com/maks-pixel/ahsoka',
            deploy:'https://maks-pixel.github.io/ahsoka/'
        },
        {
            title: 'Note Taker',
            image: 'note-taker.png',
            link: 'https://github.com/maks-pixel/wk11-NoteTaker',
            deploy:'https://mighty-garden-96040.herokuapp.com/'
        },
        {
            title: 'Tech Blog R Us',
            image: 'techblog.png',
            link: 'https://github.com/maks-pixel/wk14-techblog',
            deploy:'https://morning-scrubland-20709.herokuapp.com/'
        },
        {
            title: 'Surveyorama',
            image: 'Surveyorama.jpg',
            link: 'https://github.com/maks-pixel/surveyorama',
            deploy:'https://pacific-fortress-98134.herokuapp.com/login'
        },
        {
            title: 'Run-buddy',
            image: 'runbuddy-thumb.jpg',
            link: 'https://github.com/maks-pixel/run-buddy',
            deploy:'https://maks-pixel.github.io/run-buddy/'
        }
    ];
    return (
        <div>
            <Row md={3} className="g-6">
                {project.map((info) => (
                    <Col>
                        <Card className="text-center" style={{ width: '40rem', height:'35rem'}}  bg="secondary">
                            <Card.Img variant="top" style={{ width: '45 rem', height:'22rem'}}  src={require(`../../assets/images/${info.image}`)} />
                            <Card.Body>
                                <Card.Title>{info.title}</Card.Title>
                                <div className="d-grid gap-2">
                                <Button variant="dark" size="lg" href={info.link}>Github Repository </Button>
                                <Button variant="dark" size="lg" href={info.deploy}>Deployed</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Projects;
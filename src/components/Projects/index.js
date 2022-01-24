import React from 'react';
import Card from 'react-bootstrap/card';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';



function Projects() {
    const project = [
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
            title: 'Password Generator',
            image: 'password.png',
            link: 'https://github.com/maks-pixel/wk3-passwordpls',
            deploy:'https://maks-pixel.github.io/wk3-passwordpls/'
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
        },
        {
            title: 'Team Profile Generator',
            image: 'team.png',
            link: 'https://github.com/maks-pixel/wk10-TeamProfileGenerator',
            deploy:'https://watch.screencastify.com/v/aABySFtQSLZdC5K5LKan'
        },
    ];
    return (
        <div>
            <Row md={3} className="g-6">
                {project.map((info) => (
                    <Col>
                        <Card className="text-center" bg="secondary">
                            <Card.Img variant="top" src={require(`../../assets/images/${info.image}`)} />
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
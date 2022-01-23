import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Projects() {
    const project = [
        {
            title:'Pantry-Remover',
            image:'pantry-remover.png',
            link:'https://github.com/maks-pixel/ahsoka'
        },
        {
            title:'Note Taker',
            image:'note-taker.png',
            link:'https://github.com/maks-pixel/wk11-NoteTaker'
        },
        {
            title:'Password Generator',
            image:'password.png',
            link:'https://github.com/maks-pixel/wk3-passwordpls'
        },
        {
            title:'Surveyorama',
            image:'Surveyorama.jpg',
            link:'https://github.com/maks-pixel/surveyorama'
        },
        {
            title:'Run-buddy',
            image:'runbuddy-thumb.jpg',
            link:'https://github.com/maks-pixel/run-buddy'
        },
        {
            title:'Team Profile Generator',
            image:'team.png',
            link:'https://github.com/maks-pixel/wk10-TeamProfileGenerator'
        },
    ];
    return (
       <div>
           {project.map((info) => (
           <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require (`../../assets/images/${info.image}`)} alt='' key=''/>
        <Card.Body>
          <Card.Title>{info.title}</Card.Title>
          <Button variant="primary" href={info.link}>Repo</Button>
        </Card.Body>
      </Card>
           ))
}
       </div>
    );
}

export default Projects;
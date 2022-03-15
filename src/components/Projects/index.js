import React from 'react';
import Button from 'react-bootstrap/button';



function Projects() {
    const project = [
        {
            title: 'OkCreature',
            image: 'OkCreature.png',
            describe: 'Site to match users with pets they can adopt based on the answers in a quiz',
            tech:'',
            link: 'https://github.com/maks-pixel/pet-matcher',
            deploy: 'https://okcreature.herokuapp.com/'
        },
        {
            title: 'Pantry-Remover',
            image: 'pantry-remover.png',
            describe: 'A app for users wanting recipers with specific ingredients',
            tech:'',
            link: 'https://github.com/maks-pixel/ahsoka',
            deploy: 'https://maks-pixel.github.io/ahsoka/'
        }, 
        {
            title: 'Tech Blog R Us',
            image: 'techblog.png',
            describe: 'Tech Blog for users to post and comment about tech and build a community',
            tech:'',
            link: 'https://github.com/maks-pixel/wk14-techblog',
            deploy: 'https://morning-scrubland-20709.herokuapp.com/'
        },
        {
            title: 'Note Taker',
            image: 'note-taker.png',
            describe: 'A site that allows the user to make notes and have a list of notes they can go through',
            tech:'',
            link: 'https://github.com/maks-pixel/wk11-NoteTaker',
            deploy: 'https://mighty-garden-96040.herokuapp.com/'
        },
       
        {
            title: 'Surveyorama',
            image: 'Surveyorama.jpg',
            describe: 'A site where a user can creat a quiz to distribute to friends to fill out',
            tech:'',
            link: 'https://github.com/maks-pixel/surveyorama',
            deploy: 'https://pacific-fortress-98134.herokuapp.com/login'
        },
        {
            title: 'Run-buddy',
            image: 'runbuddy-thumb.jpg',
            describe: 'An information site for the exercise company run-buddy',
            tech:'',
            link: 'https://github.com/maks-pixel/run-buddy',
            deploy: 'https://maks-pixel.github.io/run-buddy/'
        }
    ];
    return (
        <section className='projects'>
        <div className='header'><h1>Projects</h1></div>
        <div className='all-cards'>
            {project.map((info) => (
                <div className='card-container'>
                    <div className='img-container'>
                        <img className='card-img' src={require(`../../assets/images/${info.image}`)} alt={info.title} />
                    </div>
                    <div className='info-container'>
                            <h4 className='title'>{info.title}</h4>
                            <p className='description'>
                                <strong>Description :</strong><br />
                               {info.describe}
                            </p>
                            <br />
                             <Button  variant="outline-secondary" style = {{color: '#094067'}} href={info.link}>Repository</Button> 
                             <Button  variant="outline-secondary" style = {{color: '#094067'}} href={info.deploy}>Deployed</Button>
                    </div>
                </div>
            ))}

        </div>
        </section>
    );
}

export default Projects;
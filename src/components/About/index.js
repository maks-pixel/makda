import React from 'react';
import Card from 'react-bootstrap/card';


function About() {
    return (
        <section>
            <Card bg='dark' text='light'>
                <Card.Img className="photo" variant="top" src={require('../../assets/images/maks.jpg')} alt='picture of the developer' />
                <Card.Body>
                    <Card.Text>
                        Hello, My name is Makda Girmay but most people call me Maks. I am a flegling Web Developer and all around nerd excited to learn more about web development and programming as a whole. Welcome to my First React site.
                        Here you will find some of my projects, my resume and a way to contact me. I am Looking forward to hearing form you.
                    </Card.Text>
                </Card.Body>
            </Card>

        </section>

    );
}

export default About;
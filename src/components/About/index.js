import React from 'react';

function About() {
    return (
        <section className='about'>
            <div className='about-container'>
                <div className ='image-container'>
                    <img className='image' src={require('../../assets/images/maks.jpg')} alt='creator'/>
                </div>
                <div className='bio'>
                    <h3>Hi! my name is Makda (Maks) Girmay</h3>
                    <p>
                    I am a flegling Web Developer and all around nerd excited to learn more about web development and programming as a whole. Welcome to my First React site.
                        Here you will find some of my projects, my resume and a way to contact me. I am Looking forward to hearing form you.
                    </p>
                </div>
            </div>
        </section>

    );
}

export default About;
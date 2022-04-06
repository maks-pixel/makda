import React from 'react';

function Home() {
    return (
        <section className='home'>
            <div className='home-container'>
                <div className ='image-container'>
                    <img className='image' src={require('../../assets/images/maks.jpg')} alt='creator'/>
                </div>
                <div className='bio'>
                    <h3 className='typing-demo'>Hi! My name is Makda "Maks" Girmay</h3>
                    <p>
                    I am a junior Full stack Web Developer and all around nerd, welcome to my portfolio.
                        Here you will find a bit more about me, some of my projects, my resume and a few ways to contact me. I am Looking forward to hearing form you.
                    </p>
                </div>
            </div>
        </section>

    );
}

export default Home;
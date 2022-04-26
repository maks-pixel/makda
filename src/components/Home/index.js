import React from 'react';

function Home() {
    return (
        <section className='home'>
            <div className='home-container'>
                
                <div className='image-container-about'>
                    <iframe src="https://giphy.com/embed/3oEjI6vws7veQwubdu" width="338" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                </div>
                <div className='bio'>
                    <h3 className='typing-demo'>Hi! My name is Makda "Maks" Girmay</h3>
                    <p>
                    I am a Junior Full stack Web Developer, barista and all around nerd, welcome to my portfolio.
                        Here you will find a bit more about me, some of my projects, my resume and a few ways to contact me. I am Looking forward to hearing from you.
                    </p>
                </div>
            </div>
        </section>

    );
}

export default Home;
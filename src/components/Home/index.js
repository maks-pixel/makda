import React from 'react';

function Home() {
    return (
        <section className='home'>
            <div className='home-container'>
                <div className='image-container'>
                <img className='image' src={require('../../assets/images/maks.jpg')} alt='the developer'/>
                </div>
                <div className='bio'>
                    <h3 className='typing-demo'>Hi! My name is Makda "Maks" Girmay</h3>
                    <p>
                    I am full stack developer, coffee-connoisseur, plant-wizard, and self-proclaimed comedian...welcome to my portfolio! Here you will find a bit more about me, and some of my projects I've done so far. If you want to know more, feel free to click the Contact button at the top! I am looking forward to hearing from you!         </p>
                </div>
            </div>
        </section>

    );
}

export default Home;
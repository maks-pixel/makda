import React from 'react';

function About() {
    return (
        <section className='about'>
            <div className='about-container'>
                <div className ='image-container'>
                    <img className='image' src={require('../../assets/images/maks.jpg')} alt='creator'/>
                </div>
                <div className='bio'>
                    <h3>Hi! my name is Makda "Maks" Girmay</h3>
                    <p>
                    I am a junior Fads,gfDKFVBw;dfv;KADJFC;IASDHB;ISDBH JEDBFPWUEHF ISDHBFKJHS DVCJHD YIWDGVJBDSJHVGADJCVBASJHGLJWBEDFVLSDGVJLSDHVOUDFUYGVLSADBFLKjdbfs dihfemdxfcglwrg ull stack Web Developer and all around nerd, welcome to my portfolio.
                        Here you will find a bit more about me, some of my projects, my resume and a few ways to contact me. I am Looking forward to hearing form you.
                    </p>
                </div>
            </div>
        </section>

    );
}

export default About;
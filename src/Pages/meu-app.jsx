import React from 'react';
import Footer from '../Components/Footer';

import Header from '../Components/Header';

class Home extends React.Component {
    render() {
        return (
            <section className='screen'>
                <Header />
                <div className='container_redes'>
                    <h1 className='title_prin'>
                        Lucas Domingues
                    </h1>
                    <p>Web Development Student</p>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/lucas-camargo-domingues-4977a8237/" target='blank'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt='linkedin' className='linkedin' /></a>
                    <a href="https://github.com/Lucdomingues" target='blank'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github' /></a>
                </div>
                <Footer />
            </section>
        )
    }
}


export default Home;
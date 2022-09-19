import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

class Contact extends React.Component {
    render() {
        return (
            <section className='screen'>
                <Header />
                <h1>Contanto</h1>
                <section>
                    <p>(Recomendado) Email: lojalucc@outlook.com</p>
                    <p>Celular: (11) 94731-9372</p>
                </section>
                <div>
                    <a href="https://www.linkedin.com/in/lucas-camargo-domingues-4977a8237/" target='blank'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt='linkedin' className='linkedin' /></a>
                    <a href="https://github.com/Lucdomingues" target='blank'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github' /></a>
                </div>
                <Footer />
            </section>
        )
    }
}


export default Contact;
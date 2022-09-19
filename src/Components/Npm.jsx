import React from 'react';
import Footer from './Footer';
import Header from './Header';

class Npm extends React.Component {
    render() {
        return (
            <section className='screen'>
                <Header />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="simbol-npm"
                    width="300px" />
                <div>
                    <h1>Npm</h1>
                    <ul>
                        <li>Conhecimento geral de Npm</li>
                        <li>Conhecimento sobre os comandos npm</li>
                        <li>Conhecimento sobre npm e npx</li>
                        <li>Prática com alguns comandos npm</li>
                    </ul>
                </div>
                <Footer />
            </section>
        )
    }
}


export default Npm;
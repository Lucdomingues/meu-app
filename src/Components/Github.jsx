import React from 'react';
import Footer from './Footer';
import Header from './Header';

class Github extends React.Component {
    render() {
        return (
            <section className='screen'>
                <Header />
                <img
                    src="https://img.icons8.com/material-outlined/344/github.png"
                    alt="simbol-Github"
                    width="300px"
                />
                <div>
                    <h1>GitHub</h1>
                    <ul>
                        <li>Conhecimento geral de GitHub</li>
                        <li>Conhecimento de copy, fork e outros...</li>
                        <li>Conhecimento de PR's, conflitos, merge</li>
                        <li>Conhecimento sobre recebimento e envio de repositórios</li>
                        <li>
                            Trabalhar em um mesmo projeto, com mais de uma pessoa, de forma assíncrona e distribuída.
                        </li>
                        <li>Prática com um time pequeno usando GitHub</li>
                    </ul>
                </div>
                <Footer />
            </section>
        )
    }
}


export default Github;
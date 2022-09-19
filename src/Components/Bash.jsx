import React from 'react';
import Footer from './Footer';
import Header from './Header';

class Bash extends React.Component {
    render() {
        return (
            <section className='screen'>
                <Header />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="simbol-bash"
                    width="300px" />
                <div>

                    <h1>Unix e Bash</h1>
                    <ul>
                        <li>Conhecimento sobre seus principais componentes</li>
                        <li>Conhecimento sobre suas variações</li>
                        <li>Conhecimento sobre arquivos e processos</li>
                        <li>Conhecimento sobre estrutura de diretórios</li>
                        <li>Conhecimento sobre o terminal</li>
                        <li>Conhecimento sobre comando do Shell</li>
                    </ul>
                </div>
                <Footer />
            </section>
        )
    }
}


export default Bash;
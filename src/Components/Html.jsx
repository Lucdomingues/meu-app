import React from 'react';
import Footer from './Footer';
import Header from './Header';

class Html extends React.Component {
    render() {
        return (
            <section className='screen'>
                <Header />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="simbol-HTML"
                    width="300px" />
                <div>
                    <h1>Html</h1>
                    <ul>
                        <li>Conhecimento geral de Html</li>
                        <li>Conhecimento de como criar formulários Html</li>
                        <li>Estruturar páginas web com HTML utilizando as tags html, head e body</li>
                        <li>Utilizar o HTML para estruturar textos e títulos</li>
                        <li>Utilizar o HTML para criar listas, links e adicionar imagens</li>
                        <li>Criar páginas semanticamente válidas e acessíveis</li>
                        <li>Conhecimento da diferença entre elementos de bloco e elementos inline</li>
                    </ul>
                </div>
                <Footer />
            </section>
        )
    }
}


export default Html;
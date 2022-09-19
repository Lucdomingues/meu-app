import React from 'react';
import Footer from './Footer';
import Header from './Header';

class TecReact extends React.Component {
    render() {
        return (
            <section className='screen'>
                <Header />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="simbol-react"
                    width="300px" />
                <div>
                    <h1>React</h1>
                    <ul>
                        <li>Conhecimento geral de React</li>
                        <li>Conhecimento de como utilizar a biblioteca React para criar aplicações Front-end que se conectam com APIs</li>
                        <li>Conhecimento de como Criar interfaces web com rotas de navegação utilizando React Router</li>
                        <li>Conhecimento de como trabalhar em equipe utilizando a metodologia SCRUM</li>
                        <li>Conhecimento de como testar as aplicações utilizando React Testing Library (RTL)</li>
                        <li>Conhecimento de como administrar todo estado das aplicações React utilizando Redux</li>
                    </ul>
                </div>
                <Footer />
            </section>
        )
    }
}


export default TecReact;
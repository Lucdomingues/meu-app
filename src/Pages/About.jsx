import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

class About extends React.Component {
    render() {
        return (
            <section className='screen'>
                <Header />
                <div><a href="https://www.linkedin.com/in/lucas-camargo-domingues-4977a8237/" target='blank'><img src="https://media-exp1.licdn.com/dms/image/C4E03AQFjvJd8TqwxXA/profile-displayphoto-shrink_800_800/0/1653573514395?e=1669248000&v=beta&t=R7jYJw7OGNevlD7DYAyH3BsGev21ACp0KRDSaRMkaiE" alt="lucas_domingues" className='image_autor' /></a>
                </div>
                <div className='container container-ab'>
                    <h1>Sobre Mim</h1>
                    <h3>Olá, seja bem-vindo!</h3>
                    <p>Me chamo Lucas, tenho 19 anos e sou natural de São Paulo, SP. Atualmente, estou estudando na <strong>TRYBE</strong> uma escola de desenvolvimento web,  onde promete os conteúdos de front-end/back-end e uma breve passada em ciência da computação.</p>
                    <p>Já concluí um <strong >curso introdutório de JavaScript</strong>, e <strong >fundamentos da programação</strong>, agora estou estudando <strong>front-end</strong>. Percebi que o inglês vai ajudar muito na realização das minhas aplicações e afins, portanto começei um curso básico de inglês na escola de idiomas EF. </p>
                    <p>Vi no mundo da tecnologia uma oportunidade de carreira, ouvi dizer muito bem da área e decidi ir a fundo. Uma das coisas que mais me motivou foi ver que não preciso saber de tudo de um tecnologia para ingressar, que o mais importante é sempre estar aprendendo a aprender e saber pedir ajuda, uma questão que estou tentando melhorar a cada dia.</p>
                    <p>Meu objetivo no mundo tech é conseguir me especializar em alguma área que eu atue e conseguir agregar valor ao time e a empresa, porque afinal reconhecimento é uma coisa incrível!</p>
                </div>
                <Footer />
            </section>
        )
    }
}


export default About;
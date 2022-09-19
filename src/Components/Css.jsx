import React from 'react';
import Footer from './Footer';
import Header from './Header';

class Css extends React.Component {
    render() {
        return (
            <section className='screen'>
                <Header />
                <img
                    src="https://img.icons8.com/color/344/css3.png"
                    alt="simbol-CSS"
                    width="300px"
                />
                <div className='container-ab'>
                    <h1>Css</h1>
                    <ul>
                        <li>Conhecimento geral de Css</li>
                        <li>Conhecimento para utilizar as bibliotecas Css</li>
                        <li>Conhecimento de como utilizar CSS Flexbox para criar layouts flexíveis</li>
                        <li>Conhecimento de como criar regras CSS específicas para serem aplicadas a dispositivos móveis</li>
                        <li>Conhecimento de como construir páginas que alteram o seu layout de acordo com a orientação da tela</li>
                        <li>Conhecimento de como Utilizar CSS Flexbox para alterar o comportamento de items</li>
                        <li>Conhecimento de como utilizar CSS Flexbox para alterar o comportamento de containers</li>
                        <li>Conhecimento das regras de estilo para tags HTML utilizando o CSS</li>
                        <li>Conhecimento da utilização dos seletores de tag, id e class para aplicar regras de CSS</li>
                        <li>Alterar características da fonte e das cores de páginas web</li>
                        <li>Conhecimento da utilização de Utilizar CSS inline e externo</li>
                        <li>Conhecimento sobre Box Model e como os elementos da página se relacionam visualmente</li>
                        <li>Conhecimento de como posicionar elementos na página de diferentes formas</li>
                        <li>Conhecimento de como combinar e agrupar seletores de CSS para criar regras bem definidas</li>
                    </ul>
                </div>
                <Footer />
            </section>
        )
    }
}


export default Css;
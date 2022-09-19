import React from 'react';
import Footer from './Footer';
import Header from './Header';

class JS extends React.Component {
    render() {
        return (
            <section className='screen'>
                <Header />
                <img
                    src="https://img.icons8.com/color/344/javascript--v1.png"
                    alt="simbol-JS"
                    width="300px"
                />
                <div>
                    <h1>JavaScript</h1>
                    <ul>
                        <li>Conhecimento geral de JS</li>
                        <li>Conhecimento sobre HOF's</li>
                        <li>Conhecimento sobre JavaScript ES6 - spread operator, parâmetro rest, destructuring e mais</li>
                        <li>Conhecimento sobre JavaScript ES6 - let, const, arrow functions, template literals, Fluxo de exceção e Objetos</li>
                        <li>Conhecimento sobre JavaScript ES6 - </li>
                        <li>Conhecimento de como utilizar bibliotecas JavaScript externas a partir de uma CDN</li>
                        <li>Conhecimento de como utilizar bibliotecas JS</li>
                        <li>Conhecimento sobre variáveis, constantes, tipos primitivos, tipagem dinâmica, operadores aritméticos, operadores de atribuição, operadores lógicos, if/else e switch/case</li>
                        <li>Conhecimento sobre arrays e for</li>
                        <li>Conhecimento sobre lógica de programação e algoritmos</li>
                        <li>Conhecimento sobre objetos, for/in e funções</li>
                        <li>Conhecimento sobre DOM</li>
                        <li>Conhecimento sobre elementos</li>
                        <li>Conhecimentos sobre eventos e web storage</li>
                    </ul>
                </div>
                <Footer />
            </section>
        )
    }
}


export default JS;
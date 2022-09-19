import React from 'react';
import Footer from './Footer';
import Header from './Header';

class Jest extends React.Component {
    render() {
        return (
            <section className='screen'>
                <Header />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                    alt="simbol-jest"
                    width="300px"
                />
                <div>
                    <h1>Jest</h1>
                    <ul>
                        <li>Conhecimento sobre testes unitários</li>
                        <li>Conhecimento sobre TDD, desenvolvimento orientado a testes</li>
                        <li>Conhecimento de testes unitários a partir do framework Jest</li>
                    </ul>
                </div>
                <Footer />
            </section>
        )
    }
}


export default Jest;
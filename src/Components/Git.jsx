import React from 'react';
import Footer from './Footer';
import Header from './Header';

class Git extends React.Component {
    render() {
        return (
            <section className='screen'>
                <Header />
                <img
                    src="https://img.icons8.com/color/344/git.png"
                    alt="simbol-GIT"
                    width="300px"
                />
                <div>
                    <h1>Git</h1>
                    <ul>
                        <li>Conhecimento sobre versionamento de código</li>
                        <li>Conhecimento sobre os comandos git's (git add., commit, push, pull etc ...)</li>
                        <li>Conhecimento sobre o local e remoto</li>
                        <li>Conhecimento sobre a importância de commits semanticos</li>
                        <li>Conhecimentos sobre a importância do uso das branch's</li>
                        <li>Conhecimento geral de Git</li>
                    </ul>
                </div>
                <Footer />
            </section>
        )
    }
}


export default Git;
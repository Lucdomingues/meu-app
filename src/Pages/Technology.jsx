import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

class Technology extends React.Component {
    render() {
        return (
            <section className='screen'>
                <Header />
                <h1>Tecnologias</h1>
                <h5>Clique nas tecnologias para ver meus conhecimentos</h5>
                <div class="container text-center">

                    <div class="row">

                        <div class="col colum-1">
                            <p>
                                <Link to='/JavaScript'><img
                                    src="https://img.icons8.com/color/344/javascript--v1.png"
                                    alt="simbol-JS"
                                    width="80px"
                                /></Link>
                            </p>
                            <p>
                                <Link to='/tecreact'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="simbol-react"
                                        width="80px" />
                                </Link>
                            </p>
                            <p>
                                <Link to='/npm'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="simbol-npm"
                                        width="80px" />
                                </Link>

                            </p>
                        </div>
                        <div class="col order-5">
                            <p>
                                <Link to='/html'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="simbol-HTML"
                                        width="80px" />
                                </Link>

                            </p>
                            <p>
                                <Link to='/github'>
                                    <img
                                        src="https://img.icons8.com/material-outlined/344/github.png"
                                        alt="simbol-Github"
                                        width="80px"
                                    />
                                </Link>

                            </p>
                            <p>
                                <Link to='/jest'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                                        alt="simbol-jest"
                                        width="80px"
                                    />
                                </Link>
                            </p>
                        </div>
                        <div class="col order-1 colum-1">
                            <p>
                                <Link to='/css'>
                                    <img
                                        src="https://img.icons8.com/color/344/css3.png"
                                        alt="simbol-CSS"
                                        width="80px"
                                    />
                                </Link>

                            </p>
                            <p>
                                <Link to='/git'>
                                    <img
                                        src="https://img.icons8.com/color/344/git.png"
                                        alt="simbol-GIT"
                                        width="80px"
                                    />
                                </Link>

                            </p>
                            <p>
                                <Link to='/bash'>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="simbol-bash"
                                        width="80px" />
                                </Link>

                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}


export default Technology;
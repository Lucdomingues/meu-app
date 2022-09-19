import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav class="navbar">
                    <div class="container-md">
                        <Link to='/meu-app' className="link" >Home</Link>
                        <Link to='/about' className="link">About</Link>
                        <Link to='/technology' className='link'>Technology</Link>
                        <Link to='/projects' className="link">Projects</Link>
                        <Link to='/contact' className="link">Contact</Link>
                    </div>
                </nav>
            </header>
        )
    }
}


export default Header;
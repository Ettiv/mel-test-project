import React, {Component} from "react";
import {Link} from "react-router-dom";
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className='header-width'>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div className='navbar-brand'>Star Wars Characters</div>
                    <div>
                        <ul className='navbar-nav'>
                            <li><Link className='nav-link' to='/'>Characters</Link></li>
                            <li><Link className='nav-link' to='/favorits'>Favorits</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
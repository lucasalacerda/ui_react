import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="">
                    <ul className="nav justify-content-end">
                        <li className="nav-item active"><Link to ="/" className ="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to ="/about" className ="nav-link">About</Link></li>
                        <li className="nav-item"><Link to ="/login" data-toggle="modal" data-target="#modalLogin" className ="nav-link">Sigin</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

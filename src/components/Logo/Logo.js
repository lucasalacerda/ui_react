import React from 'react';
import './index.css';

export class Logo extends React.Component {
    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="#id">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#item">Link</a>
                </li>
            </ul>
        );
    }
}

import React from 'react';
import './index.css';

export class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }
    render() {
        return (
            <button type="button" className="btn btn-outline-dark">Dark</button>
        );
    }
}

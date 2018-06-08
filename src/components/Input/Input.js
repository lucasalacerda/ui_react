import React from 'react';
import './index.css';

export class Input extends React.Component {
    render() {
        return (
            <input className="form-control border-dark rounded-0" type={this.props.type} placeholder={this.props.fieldPlaceholder} />
        );
    }
}

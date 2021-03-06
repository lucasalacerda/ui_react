import React from 'react';
import './index.css';

class Title extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row align-items-end justify-content-md-center">
                    <div className="col-md-auto">
                        <h1 {...this.props} className="title">{this.props.title}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Title;

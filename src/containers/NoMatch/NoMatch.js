import React from 'react';
import './NoMatch.css'; 

export class NoMatch extends React.Component {
    render(){
        return(
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h1>Sorry! This page doesn't exist </h1>
                        <h2>):</h2>
                    </div>
                </div>
            </div>
        )
    }
}
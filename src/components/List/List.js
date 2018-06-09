import React from 'react';
import { Button } from "../Button/Button";
import './index.css';

export class List extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            fieldPlaceholder : '',
            button : ''}
    }
    render(){
        return (
            <ul className="list-group">
                <li className="list-group-item list-group-item-dark">{props.listItem}</li>
            </ul>
        );
    }
}

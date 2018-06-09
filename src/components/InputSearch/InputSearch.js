import React from 'react';
import './index.css';
import { Button } from "../Button/Button";

export class InputSearch extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            fieldPlaceholder : '',
            button : ''}
    }
    render(){
        return (
           <div className="form-style-8 text-center">
              <form>
                <input className="form-control border-dark rounded-0" type="search" name="search" placeholder={this.props.fieldPlaceholder} />
                <Button buttonTitle={this.props.buttonTitle}/>
              </form>
            </div>
        );
    }
}

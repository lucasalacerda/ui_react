import React from 'react';
import './index.css';
import { Button } from "../Button/Button";

export class SearchInput extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            fieldPlaceholder : '',
            button : ''}
    }

    render(){
        return (
           <div class="form-style-8">
              <form>
                <input type="search" name="search" placeholder={this.props.fieldPlaceholder} />
                <Button />
              </form>
            </div>
        );
    }
}

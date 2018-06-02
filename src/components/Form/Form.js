import React from 'react';
import './index.css';

export class FormComponent extends React.Component{
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
                <h1>{this.props.propTest}</h1>
                <input type="search" name="search" placeholder={this.props.fieldPlaceholder} />
                <button>{this.props.buttonTitle}</button>
              </form>
            </div>
        );
    }
}

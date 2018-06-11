import React, { Component } from 'react';
import { Button } from "../Button/Button";
import './index.css';

export class InputSearch extends Component{
    constructor(props){
        super(props)
        this.state = { 
            inputSearch : '',
            fieldPlaceholder : '',
            button : ''}
    }


    handleSearch = () => {
        this.props.history.push(`/result?q=${this.state.inputSearch}`)
    }
    render(){

        return (
           <div className="form-style-8 text-center">
              <form>
                <input onChange={ e => this.setState({inputSearch: e.target.value})} className="form-control border-dark rounded-0" type="search" name="search" placeholder={this.props.fieldPlaceholder} />
                <Button onClick={this.handleSearch} title={this.props.title}/>
              </form>
            </div>
        );
    }
}

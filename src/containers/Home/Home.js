import React from 'react';
import { InputSearch } from "../../components/InputSearch/InputSearch";
import { Logo } from '../../components/Logo/Logo';

export class Home extends React.Component {
    render(){
        return (
            <div>
                <Logo/>
                <InputSearch fieldPlaceholder="Search for events, countries, cities..." title="Search" {...this.props}/>  
            </div>
        )
    }       
}
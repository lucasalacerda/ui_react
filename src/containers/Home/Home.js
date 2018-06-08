import React from 'react';
import { InputSearch } from "../../components/InputSearch/InputSearch";

export class Home extends React.Component {
    render(){
        return (
            <InputSearch fieldPlaceholder="Search for events, countries, cities..." buttonTitle="Search"/>  
        )
    }       
}
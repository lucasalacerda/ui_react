import React from 'react';
import ReactDOM from 'react-dom';
import { SearchInput } from './components/Input/SearchInput';
import { Header } from "./components/Header/Header";

class Body extends React.Component {
    render() {
        return[
            <Header />,
            <SearchInput propTest="lala" fieldPlaceholder="Search" buttonTitle="lalala"/>
        ]
    }
    
}

ReactDOM.render(
    <Body />,
    document.getElementById('root')
);
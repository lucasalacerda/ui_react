import React from 'react';
import ReactDOM from 'react-dom';
import { SearchInput } from './components/Input/SearchInput';
import { Header } from "./components/Header/Header";
import { Logo } from "./components/Logo/Logo";

class Body extends React.Component {
    render() {
        return[
            <Header />,
            <Logo />,
            <SearchInput propTest="lala" fieldPlaceholder="Search" buttonTitle="lalala"/>
        ]
    }
    
}

ReactDOM.render(
    <Body />,
    document.getElementById('root')
);
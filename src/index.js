import React from 'react';
import ReactDOM from 'react-dom';
import { InputSearch } from './components/InputSearch/InputSearch';
import { Header } from "./components/Header/Header";
import { Logo } from "./components/Logo/Logo";
import { BrowserRouter } from 'react-router-dom';
import { LoginModal } from './components/LoginModal/LoginModal';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Logo />
                <InputSearch fieldPlaceholder="Search for events, countries, cities..." buttonTitle="Search"/>
                <LoginModal />
            </div>
        );
    }
    
}

ReactDOM.render((
     <BrowserRouter>
         <App />
     </BrowserRouter>
),
    document.getElementById('root')
);
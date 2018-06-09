import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router'

import { Header } from "./components/Header/Header";
import { LoginModal } from './components/LoginModal/LoginModal';

import { Home } from "./containers/Home/Home";
import { About } from "./containers/About/About";
import { NoMatch } from "./containers/NoMatch/NoMatch";
import { ResultPage } from './containers/ResultPage/ResultPage';


class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/result" component={ResultPage}/>
                    {/* <Route path="/:user" component={User}/> */}
                    <Route component={NoMatch}/>
                </Switch>
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
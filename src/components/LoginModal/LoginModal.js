import React from 'react';
import './index.css';
import Button from "../Button/Button";
import Input from '../Input/Input';
import { Link } from 'react-router-dom';

export class LoginModal extends React.Component {

    handleClick = (e) => {
      document.querySelector('.close').click();
    }

    render() {
        return (       
            <div className="modal fade" id="modalLogin" role="dialog" aria-labelledby="modalLoginLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalLabel">Sigin</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col">
                                <Input type="text" fieldPlaceholder="Email"/>
                                <Input type="password" fieldPlaceholder="Senha"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer text-center">
                    <Link to="/register"><Button title="Sign Up" type="button" onClick={this.handleClick} data-dismiss="modal"/></Link>
                    <Button title="Log in"/>
                </div>
                </div>
            </div>
            </div>
        );
    }
}
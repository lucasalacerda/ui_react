import React from 'react';
import './index.css';
import { Button } from "../Button/Button";
import { Input } from '../Input/Input';


export class LoginModal extends React.Component {

    clearFIelds(){
        alert('aaa');
        document.querySelector('input[placeholder=Email]').reset();
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
                    <Input fieldPlaceholder="Email"/>
                    <Input type="password" fieldPlaceholder="Senha"/>

                </div>
                <div className="modal-footer text-center">
                    <Button title="Cancel" type="button" onClick={this.clearFields}/>
                    <Button title="Sigin"/>
                </div>
                </div>
            </div>
            </div>
        );
    }
}
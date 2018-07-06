import React from 'react';
import './index.css';
import Button from "../Button/Button";
import Input from '../Input/Input';


export class LoginModal extends React.Component {

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
                    <Button title="Cancel" type="button" data-dismiss="modal"/>
                    <Button title="Sigin"/>
                </div>
                </div>
            </div>
            </div>
        );
    }
}
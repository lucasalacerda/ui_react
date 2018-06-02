import React from 'react';
import './index.css';

class FormComponent extends React.Component{
    render(){
        return (
           <ul className="form-style-8">
              <form>
                <input type="search" name="search" placeholder={formPlaceholder} />
              </form>
            </ul>
        );
    }
}

import React from 'react';
import './index.css';

const Input = ({ type, fieldPlaceholder }) => (
    <input className="form-control border-dark rounded-0" name="input" type={type} placeholder={fieldPlaceholder} />
)

export default Input;

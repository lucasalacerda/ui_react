import React from 'react';
import './index.css';

const Button = ({title, onClick}) => (
    <button onClick={onClick} className="btn btn-outline-dark rounded-0" >{title}</button>
)

export default Button;
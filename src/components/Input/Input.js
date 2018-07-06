import React from 'react';
import './index.css';

const Input = ({ onChange, type, fieldPlaceholder }) => (
	<input onChange={onChange} type={type} name="input" className="form-control border-dark rounded-0" placeholder={fieldPlaceholder}/>
)
export default Input;

import React from 'react';
// import { Button } from "../Button/Button";
import './index.css';
import Input from '../Input/Input'
import Button from '../Button/Button';

const Form = ({ onSubmit, onChange, value, fieldPlaceholder1, fieldPlaceholder2, fieldPlaceholder3}) => (
	<div className="container form-style-8 text-center">
		<div className="row">
			<div className="col">
				<form onSubmit={onSubmit} >
					<Input  onChange={onChange} type="text" name="nome" value={value} fieldPlaceholder={fieldPlaceholder1}/>
					<Input  onChange={onChange} type="text" name="email" value={value} fieldPlaceholder={fieldPlaceholder2}/>
					<Input  onChange={onChange} type="password" name="password"  value={value} fieldPlaceholder={fieldPlaceholder3}/>
					<Button title="Register"/>
				</form>
			</div>
		</div>
	</div>
)

export default Form;

